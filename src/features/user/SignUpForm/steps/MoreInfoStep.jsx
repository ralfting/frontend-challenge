import { useFormContext, Controller } from 'react-hook-form';

import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetColors } from '../../../../services/colors';

export default function MoreInfo({ onNavigate }) {
  const { colors, isLoading } = useGetColors();
  const { formState, control } = useFormContext();

  return (
    <>
      <Typography
        display="flex"
        alignItems="center"
        variant="h5"
        component="h2"
        gap={1}
        marginBottom={3}
      >
        <InfoOutlineIcon /> Aditional info
      </Typography>

      <Box marginBottom={3}>
        <FormControl fullWidth error={!!formState.errors?.color}>
          <InputLabel htmlFor="color">Select a favorite color</InputLabel>
          <Controller
            name="color"
            control={control}
            render={({ field }) => (
              <Select
                label="Select a favorite color"
                disabled={isLoading}
                inputProps={{
                  id: 'color',
                }}
                startAdornment={
                  isLoading ? (
                    <Box display="flex" alignItems="center" gap={1}>
                      <CircularProgress color="inherit" size={20} />
                      <Typography variant="caption">Loading...</Typography>
                    </Box>
                  ) : null
                }
                {...field}
              >
                {colors?.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {formState.errors?.color && (
            <Typography color="error" variant="caption">
              {formState.errors.color.message}
            </Typography>
          )}
        </FormControl>

        <FormControl error={!!formState.errors?.terms} fullWidth>
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                label={
                  <p>
                    I agree with the <Link href="#terms">terms and conditions</Link>
                  </p>
                }
                control={<Checkbox {...field} checked={!!field.value} />}
              />
            )}
          />
          {formState.errors?.terms && (
            <Typography color="error" variant="caption">
              You need to accept the terms and conditions.
            </Typography>
          )}
        </FormControl>
      </Box>

      <Box display="flex" gap={1}>
        <Button variant="outlined" type="button" onClick={() => onNavigate('/')}>
          Back
        </Button>
        <Button variant="contained" type="button" onClick={() => onNavigate('/confirmation')}>
          Next
        </Button>
      </Box>
    </>
  );
}
