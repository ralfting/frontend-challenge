import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

export default function UserInfoStep({ onNavigate }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Box flexDirection="column" display="flex" gap="16px">
      <Typography variant="h5" component="h2">
        SignUp
      </Typography>

      <Box>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="name"
              label="First Name"
              variant="standard"
              error={!!errors?.name}
              helperText={errors?.name?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="email"
              label="E-mail"
              variant="standard"
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="password"
              id="password"
              label="Password"
              variant="standard"
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          )}
        />
      </Box>
      <Button type="button" variant="contained" onClick={() => onNavigate('/more-info')}>
        Next
      </Button>
    </Box>
  );
}
