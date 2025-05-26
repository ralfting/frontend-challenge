import { Box, Button, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export default function ReviewStep({ onNavigate }) {
  const { watch } = useFormContext();
  const { name, email, password, color, terms } = watch();

  return (
    <>
      <Typography variant="h5" component="h2">
        Confirmation
      </Typography>

      <ul>
        <li>First Name: {name || '----'}</li>
        <li>E-mail: {email || '----'}</li>
        <li>Password: {password ? '******' : '----'}</li>
        <li>Favorite color: {color || '----'}</li>
        <li>Terms and condition: {terms ? 'Agreed' : 'Pending'}</li>
      </ul>

      <Box display="flex" gap={1}>
        <Button variant="outlined" type="button" onClick={() => onNavigate('/more-info')}>
          Back
        </Button>

        <Button variant="contained" type="submit">
          Send
        </Button>
      </Box>
    </>
  );
}
