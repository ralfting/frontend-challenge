import { ConfirmationStep, UserInfoStep, MoreInfoStep } from "./steps";

import { Routes, Route, useNavigate } from "react-router";

export default function SignUpForm() {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <Routes>
      <Route index element={<UserInfoStep onNavigate={handleNavigation} />} />
      <Route
        exact
        path="more-info"
        element={<MoreInfoStep onNavigate={handleNavigation} />}
      />
      <Route
        exact
        path="confirmation"
        element={<ConfirmationStep onNavigate={handleNavigation} />}
      />
    </Routes>
  );
}
