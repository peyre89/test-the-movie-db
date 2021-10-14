import Layout from 'components/Layout';

import { AxiosError } from 'axios';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';

type ApiResponse = {
  success: boolean;
  status_code: number;
  status_message: string;
};

interface ErrorProps {
  error: AxiosError<ApiResponse>;
}

/**
 * This component is in charge of displaying the HTTP status of the response
 * as well as the message returned in case of an API error.
 */
function Error(props: ErrorProps) {
  const { error } = props;

  return (
    <Layout>
      <Box
        className="comp-error"
        sx={{ display: 'flex', justifyContent: 'center', mt: 12 }}
      >
        <Alert severity="error">
          <AlertTitle>Error {error.response?.status}</AlertTitle>

          {error.response?.data.status_message}
        </Alert>
      </Box>
    </Layout>
  );
}

export default Error;
