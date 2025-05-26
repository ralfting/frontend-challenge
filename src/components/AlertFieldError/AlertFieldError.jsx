import { Alert, AlertTitle } from '@mui/material';

export default function AlertFieldError({ errors }) {
  if (Object.keys(errors).length === 0) return null;

  return (
    <Alert severity="error">
      <AlertTitle>Some fields need your attention</AlertTitle>

      <ul>
        {Object.entries(errors).map(([field, error]) => (
          <li key={field}>
            <b>{field}</b>: {error.message}
          </li>
        ))}
      </ul>
    </Alert>
  );
}
