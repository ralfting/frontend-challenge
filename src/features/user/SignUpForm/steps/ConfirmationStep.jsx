import { Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export default function ReviewStep({ onNavigate }) {
  const { watch } = useFormContext();

  const firstname = watch('firstname');
  const email = watch('email');
  const password = watch('password');
  const color = watch('color');
  const terms = watch('terms');

  return (
    <>
      <Typography variant="h5" component="h2">
        Confirmation
      </Typography>

      <ul>
        <li>First Name: {firstname || '----'}</li>
        <li>E-mail: {email || '----'}</li>
        <li>Password: {password ? '******' : '----'}</li>
        <li>Favorite color: {color || '----'}</li>
        <li>Terms and condition: {terms ? 'Agreed' : 'Pending'}</li>
      </ul>

      <button onClick={() => onNavigate('/more-info')}>Back</button>
      <button type="submit">Send</button>
    </>
  );
}
