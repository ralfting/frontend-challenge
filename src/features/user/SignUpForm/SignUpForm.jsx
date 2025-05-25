import { useNavigate, Route, Routes } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";
import { Box, Card, CardContent } from "@mui/material";

import { ConfirmationStep, UserInfoStep, MoreInfoStep } from "./steps";

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
    <form onSubmit={methods.handleSubmit(handleSubmit)}>
      <Box>
        <Card>
          <CardContent variant="outlined">
            <FormProvider {...methods}>
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
            </FormProvider>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
}
