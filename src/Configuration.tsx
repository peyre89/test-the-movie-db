import { useEffect, useState } from 'react';

import { useAxios } from 'hooks/useAxios';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type ConfigurationProps = {
  children: JSX.Element;
};

function Configuration({ children }: ConfigurationProps) {
  const [config, setConfig] = useState<object>();

  const [{ data }] = useAxios('/configuration');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    window.config = data;

    timer = setTimeout(() => {
      setConfig(data);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [data]);

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
