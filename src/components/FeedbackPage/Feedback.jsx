import { Typography, Button, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Feedback({ onRestart, isSuccess, message }) {
  return (
    <Stack minHeight="70vh" alignItems="center" justifyContent="center">
      <Typography
        textTransform="uppercase"
        color={isSuccess ? 'success' : 'error'}
        variant="h5"
        component="h2"
        align="center"
        gutterBottom
        marginBottom={3}
      >
        {isSuccess ? 'Success!' : 'Error!'}
      </Typography>

      {isSuccess ? (
        <CheckCircleOutlineIcon
          aria-label="Check circle success icon"
          fontSize="large"
          color="success"
        />
      ) : (
        <ErrorOutlineIcon aria-label="Error Outline icon" color="error" fontSize="large" />
      )}

      <Typography variant="body1" component="p" align="center" marginBottom={3} marginTop={3}>
        {message}
      </Typography>

      <Stack justifyContent="center">
        <Button variant="outlined" onClick={onRestart}>
          Restart
        </Button>
      </Stack>
    </Stack>
  );
}
