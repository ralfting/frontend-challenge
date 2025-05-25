import { Typography } from "@mui/material";

export default function AgreementsStep({ onNavigate }) {
  return (
    <>
      <Typography variant="h5" component="h2">
        Aditional info
      </Typography>

      <button onClick={() => onNavigate("/")}>Back</button>
      <button onClick={() => onNavigate("/confirmation")}>Next</button>
    </>
  );
}
