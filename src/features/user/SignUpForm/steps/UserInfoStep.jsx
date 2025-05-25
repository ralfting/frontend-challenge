import { Box, Button, TextField, Typography } from "@mui/material";

export default function UserInfoStep({ onNavigate }) {
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
        />

        <TextField fullWidth id="email" label="E-mail" variant="standard" />

        <TextField
          fullWidth
          type="password"
          id="password"
          label="Password"
          variant="standard"
        />
      </Box>
      <Button variant="contained" onClick={() => onNavigate("more-info")}>
        Next
      </Button>
    </Box>
  );
}
