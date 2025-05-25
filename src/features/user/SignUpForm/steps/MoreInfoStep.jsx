import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function AgreementsStep({ onNavigate }) {
  return (
    <Box flexDirection="column" display="flex" gap="16px">
      <Typography variant="h5" component="h2">
        Aditional info
      </Typography>

      <Autocomplete
        options={[]}
        renderInput={(params) => (
          <TextField variant="standard" {...params} label="Movie" />
        )}
      />

      <FormControlLabel
        label={
          <p>
            I agree with the{" "}
            <Link sx={{ color: "red" }} href="#">
              terms and conditions
            </Link>
          </p>
        }
        control={<Checkbox />}
      />

      <Box display="flex" gap={1}>
        <Button
          variant="outlined"
          type="button"
          onClick={() => onNavigate("/")}
        >
          Back
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => onNavigate("/confirmation")}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
