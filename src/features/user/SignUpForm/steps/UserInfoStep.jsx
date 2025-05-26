import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import PersonOutlinedAddIcon from '@mui/icons-material/PersonAddOutlined';

export default function UserInfoStep({ onNavigate }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Stack>
      <Typography
        display="flex"
        alignItems="center"
        gap={1}
        variant="h5"
        component="h2"
        marginBottom={3}
      >
        <PersonOutlinedAddIcon /> SignUp
      </Typography>

      <Stack gap={2} marginBottom={4}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="name"
              label="First Name"
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
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          )}
        />
      </Stack>

      <Box>
        <Button type="button" variant="contained" onClick={() => onNavigate('/more-info')}>
          Next
        </Button>
      </Box>
    </Stack>
  );
}
