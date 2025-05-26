import { Box, Card, CardContent } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { ConfirmationStep, UserInfoStep, MoreInfoStep } from './steps';
import { signupValidation } from './validations';
import { useCreateUser } from '../../../services/users';
import Feedback from '../../../components/FeedbackPage/Feedback';
import AlertFieldError from '../../../components/AlertFieldError/AlertFieldError';

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

    createUser(payload, {
      onSuccess: () => {
        navigate('/success');
      },
      onError: (error) => {
        console.log(error);
        navigate('/error');
      },
    });
  }

  function handleRestart() {
    methods.reset();
    navigate('/');
  }

  return (
    <form onSubmit={methods.handleSubmit(handleSubmit)} autoComplete="off">
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
                <Route
                  path="/success"
                  element={
                    <Feedback
                      isSuccess
                      message="You should receive a confirmation email soon."
                      onRestart={handleRestart}
                    />
                  }
                />
                <Route
                  path="/error"
                  element={
                    <Feedback
                      isSuccess={false}
                      message="Uh oh. Something went wrong. Please try again."
                      onRestart={handleRestart}
                    />
                  }
                />
              </Routes>

              <Box marginTop={2}>
                <AlertFieldError errors={methods.formState?.errors} />
              </Box>
            </FormProvider>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
}
