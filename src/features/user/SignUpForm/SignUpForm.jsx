import { Box, Card, CardContent } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { ConfirmationStep, UserInfoStep, MoreInfoStep } from './steps';
import { signupValidation } from './validations';
import { useCreateUser } from '../../../services/users';

export default function SignUpForm() {
  const navigate = useNavigate();
  const { createUser } = useCreateUser();

  function handleNavigation(path) {
    navigate(path);
  }

  const methods = useForm({
    resolver: zodResolver(signupValidation),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      color: '',
      terms: false,
    },
  });

  function handleSubmit() {
    const payload = methods.getValues();
    console.log('here', payload);
    createUser(payload);
  }

  return (
    <form onSubmit={methods.handleSubmit(handleSubmit)}>
      <Box>
        <Card>
          <CardContent variant="outlined">
            <FormProvider {...methods}>
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
            </FormProvider>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
}
