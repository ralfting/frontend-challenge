import { ConfirmationStep, UserInfoStep, MoreInfoStep } from "./steps";

import { Routes, Route } from "react-router";

export default function SignUpForm() {
  return (
    <Routes>
      <Route index element={<UserInfoStep />} />
      <Route exact path="more-info" element={<MoreInfoStep />} />
      <Route exact path="confirmation" element={<ConfirmationStep />} />
    </Routes>
  );
}
