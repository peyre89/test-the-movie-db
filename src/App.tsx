import { useEffect, useState } from 'react';

import { getConfiguration } from 'api';
import { AxiosResponse } from 'axios';

import Routes from 'Routes';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

declare global {
  interface Window {
    config: any;
  }
}

function App() {
  const [config, setConfig] = useState<object | null>(null);

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

  return <Routes />;
}

export default App;
