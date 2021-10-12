import { useEffect, useState } from 'react';

import { getConfiguration } from 'api';
import { AxiosResponse } from 'axios';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type ConfigurationProps = {
  children: JSX.Element;
};

function Configuration({ children }: ConfigurationProps) {
  const [config, setConfig] = useState<object>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse = await getConfiguration();
        const config = response.data;

        window.config = config;

        setTimeout(() => {
          setConfig(config);
        }, 2000);
      } catch (error) {
        console.error('getConfiguration error');
      }
    };

    fetchData();
  }, []);

  if (config === null) {
    return (
      <Box sx={{ color: 'grey.500' }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  return children;
}

export default Configuration;
