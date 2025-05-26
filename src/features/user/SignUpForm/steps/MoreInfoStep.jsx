import { useFormContext, Controller } from 'react-hook-form';

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
    <Box flexDirection="column" display="flex" gap="16px">
      <Typography variant="h5" component="h2">
        Aditional info
      </Typography>

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
                  I agree with the <Link href="#">terms and conditions</Link>
                </p>
              }
              control={<Checkbox {...field} checked={!!field.value} />}
            />
          )}
        />
        {formState.errors?.terms && <FormHelperText>You need to check this options</FormHelperText>}
      </FormControl>

      <Box display="flex" gap={1}>
        <Button variant="outlined" type="button" onClick={() => onNavigate('/')}>
          Back
        </Button>
        <Button
          disabled={isLoading}
          variant="contained"
          type="button"
          onClick={() => onNavigate('/confirmation')}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
