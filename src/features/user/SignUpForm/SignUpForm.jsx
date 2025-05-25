import { ConfirmationStep, UserInfoStep, MoreInfoStep } from "./steps";

import { Routes, Route, useNavigate } from "react-router";
import { useForm, FormProvider } from "react-hook-form";

export default function SignUpForm() {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(path);
  }

  const methods = useForm();

  function handleSubmit() {
    console.log("submitted!");
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Routes>
          <Route
            index
            element={<UserInfoStep onNavigate={handleNavigation} />}
          />
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
      </form>
    </FormProvider>
  );
}
