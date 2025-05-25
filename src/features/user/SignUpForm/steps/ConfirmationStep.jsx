export default function ReviewStep({ onNavigate }) {
  return (
    <>
      <p>ReviewStep</p>
      <button onClick={() => onNavigate("/more-info")}>Back</button>
      <button type="submit">Send</button>
    </>
  );
}
