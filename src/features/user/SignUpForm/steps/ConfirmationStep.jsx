import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ReviewStep({ onNavigate, isLoading }) {
  const { watch } = useFormContext();
  const { name, email, password, color, terms } = watch();

  return (
    <>
      <Typography
        display="flex"
        alignItems="center"
        variant="h5"
        component="h2"
        gap={1}
        marginBottom={1}
      >
        <CheckCircleOutlineIcon variant="" /> Confirmation
      </Typography>

      <Typography variant="body2" marginBottom={2}>
        Please confirm your data before send.
      </Typography>

      <Box marginBottom={3}>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Name:" secondary={name || '----'} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="E-mail:" secondary={email || '----'} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Password:" secondary={password ? '******' : '----'} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Favorite color:" secondary={color || '----'} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText
              primary="Terms and conditions:"
              secondary={terms ? 'Agreed' : 'Pending'}
            />
          </ListItem>
        </List>
      </Box>

      <Box display="inline-flex" gap={1}>
        <Button variant="outlined" type="button" onClick={() => onNavigate('/more-info')}>
          Back
        </Button>

        <Button variant="contained" type="submit" loading={isLoading} loadingIndicator="Sending...">
          Send data
        </Button>
      </Box>
    </>
  );
}
