import { Typography } from "@mui/material";

export default function AgreementsStep({ onNavigate }) {
  return (
    <>
      <Typography variant="h5" component="h2">
        Aditional info
      </Typography>

      <button type="button" onClick={() => onNavigate("/")}>
        Back
      </button>
      <button type="button" onClick={() => onNavigate("/confirmation")}>
        Next
      </button>
    </>
  );
}
