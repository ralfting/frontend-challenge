import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function UserInfoStep({ onNavigate }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box flexDirection="column" display="flex" gap="16px">
      <Typography variant="h5" component="h2">
        SignUp
      </Typography>

      <Box>
        <TextField
          fullWidth
          id="firstname"
          label="First Name"
          variant="standard"
          {...register("firstname")}
          helperText={errors?.firstname?.message}
          error={!!errors?.firstname}
        />

        <TextField
          fullWidth
          id="email"
          label="E-mail"
          variant="standard"
          {...register("email")}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />

        <TextField
          fullWidth
          type="password"
          id="password"
          label="Password"
          variant="standard"
          {...register("password")}
          error={!!errors?.password}
          helperText={errors?.password?.message}
        />
      </Box>
      <Button
        type="button"
        variant="contained"
        onClick={() => onNavigate("more-info")}
      >
        Next
      </Button>
    </Box>
  );
}
