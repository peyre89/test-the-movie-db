import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '128px 0',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
