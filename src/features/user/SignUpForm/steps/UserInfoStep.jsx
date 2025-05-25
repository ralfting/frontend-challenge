export default function UserInfoStep({ onNavigate }) {
  return (
    <>
      <p>UserInfoStep</p>
      <button onClick={() => onNavigate("more-info")}>Next</button>
    </>
  );
}
