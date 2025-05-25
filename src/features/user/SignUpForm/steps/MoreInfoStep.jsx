export default function AgreementsStep({ onNavigate }) {
  return (
    <>
      <p>AgreementsStep</p>

      <button onClick={() => onNavigate("/")}>Back</button>
      <button onClick={() => onNavigate("/confirmation")}>Next</button>
    </>
  );
}
