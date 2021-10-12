import { useEffect, useState } from 'react';

import instance from 'api';
import axios, { AxiosResponse } from 'axios';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type ConfigurationProps = {
  children: JSX.Element;
};

function Configuration({ children }: ConfigurationProps) {
  const [config, setConfig] = useState<object>();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const source = axios.CancelToken.source();

    instance
      .get(`/configuration`, {
        cancelToken: source.token,
      })
      .then((response: AxiosResponse) => {
        const config = response.data;

        window.config = config;

        timer = setTimeout(() => {
          setConfig(config);
        }, 2000);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Axios cancel: ' + error.message);
        } else {
          console.log('Axios error: ' + error.message);
        }
      });

    return () => {
      clearTimeout(timer);
      source.cancel('Configuration got unmounted');
    };
  }, []);

  if (config === undefined) {
    return (
      <Box sx={{ color: 'grey.500' }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  return children;
}

export default Configuration;
