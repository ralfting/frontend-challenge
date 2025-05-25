import { Typography } from "@mui/material";

export default function ReviewStep({ onNavigate }) {
  return (
    <>
      <Typography variant="h5" component="h2">
        Confirmation
      </Typography>

      <button onClick={() => onNavigate("/more-info")}>Back</button>
      <button type="submit">Send</button>
    </>
  );
}
