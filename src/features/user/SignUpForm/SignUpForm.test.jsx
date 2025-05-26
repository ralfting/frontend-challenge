import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignUpForm from './SignUpForm';
import { renderWithProviders } from '../../../test/utils';
import { server, rest } from '../../../test/server';

describe('SignUpForm', () => {
  it('renders initial step page', async () => {
    renderWithProviders(<SignUpForm />, { route: '/' });

    expect(
      await screen.findByRole('heading', {
        name: /SignUp/,
        level: 2,
      })
    ).toBeVisible();
  });

  describe('Navigation', () => {
    describe('Next button', () => {
      it('navigates from User details to More info', async () => {
        server.use(
          rest.get('http://localhost:3001/api/colors', (req, res, ctx) => {
            return res(ctx.json([]));
          })
        );

        renderWithProviders(<SignUpForm />, {
          route: '/',
        });

        expect(
          await screen.findByRole('heading', {
            name: /SignUp/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole('button', {
            name: /Next/,
          })
        );

        expect(
          await screen.findByRole('heading', {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();
      });

      it('navigates from More info to Confirmation', async () => {
        server.use(
          rest.get('http://localhost:3001/api/colors', (req, res, ctx) => {
            return res(ctx.json([]));
          })
        );

        renderWithProviders(<SignUpForm />, {
          route: '/more-info',
        });

        expect(
          await screen.findByRole('heading', {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole('button', {
            name: /Next/,
          })
        );

        expect(
          await screen.findByRole('heading', {
            name: /Confirmation/,
            level: 2,
          })
        ).toBeVisible();
      });
    });

    describe('Back button', () => {
      it('navigates from Confirmation to More info', async () => {
        server.use(
          rest.get('http://localhost:3001/api/colors', (req, res, ctx) => {
            return res(ctx.json([]));
          })
        );

        renderWithProviders(<SignUpForm />, {
          route: '/confirmation',
        });

        expect(
          await screen.findByRole('heading', {
            name: /Confirmation/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole('button', {
            name: /Back/,
          })
        );

        expect(
          await screen.findByRole('heading', {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();
      });

      it('navigates from More info to User details', async () => {
        server.use(
          rest.get('http://localhost:3001/api/colors', (req, res, ctx) => {
            return res(ctx.json([]));
          })
        );

        renderWithProviders(<SignUpForm />, {
          route: '/more-info',
        });

        expect(
          await screen.findByRole('heading', {
            name: /Aditional info/,
            level: 2,
          })
        ).toBeVisible();

        await userEvent.click(
          await screen.findByRole('button', {
            name: /Back/,
          })
        );

        expect(
          await screen.findByRole('heading', {
            name: /SignUp/,
            level: 2,
          })
        ).toBeVisible();
      });
    });
  });

  describe('Validations', () => {
    describe('users details', () => {
      it('shows message error for user details fields', async () => {
        renderWithProviders(<SignUpForm />, { route: '/' });

        await userEvent.type(await screen.findByLabelText('First Name'), 'A{backspace}');

        expect(await screen.findByText(/First name cannot be empty/)).toBeVisible();

        await userEvent.type(await screen.findByLabelText('E-mail'), 'user');

        expect(await screen.findByText(/Please enter a valid email address/)).toBeVisible();

        await userEvent.type(await screen.findByLabelText('Password'), '1');

        expect(await screen.findByText(/Password must be at least 6 characters/)).toBeVisible();
      });
    });

    describe('more info', () => {
      it('shows message error for user details fields', async () => {
        server.use(
          rest.get('http://localhost:3001/api/colors', (req, res, ctx) => {
            return res(ctx.json([]));
          })
        );

        renderWithProviders(<SignUpForm />, { route: '/more-info' });

        await userEvent.click(
          await screen.findByLabelText(/I agree with the terms and conditions/i)
        );

        await new Promise((resolve) => {
          setTimeout(resolve, 100);
        });

        await userEvent.click(
          await screen.findByLabelText(/I agree with the terms and conditions/i)
        );

        expect(await screen.findByText(/You need to check this options/)).toBeVisible();
      });
    });
  });

  it('shows confirmations values', async () => {
    server.use(
      rest.get('http://localhost:3001/api/colors', (req, res, ctx) => {
        return res(ctx.json(['red', 'blue']));
      })
    );

    renderWithProviders(<SignUpForm />);

    // fill user fields
    await userEvent.type(await screen.findByLabelText('First Name'), 'John Doe');
    await userEvent.type(await screen.findByLabelText('E-mail'), 'john@doe.com');
    await userEvent.type(await screen.findByLabelText('Password'), '123456');

    await userEvent.click(await screen.findByRole('button', { name: /Next/ }));

    expect(
      await screen.findByRole('heading', {
        name: /Aditional info/i,
        level: 2,
      })
    ).toBeVisible();

    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });

    // Fill more info
    await waitFor(async () => {
      await userEvent.click(screen.queryByRole('combobox'));
      await userEvent.click(screen.queryByText('red'));
    });

    await userEvent.click(await screen.findByLabelText(/I agree with the terms and conditions/i));

    await userEvent.click(await screen.findByRole('button', { name: /Next/ }));

    expect(
      await screen.findByRole('heading', {
        name: /Confirmation/,
        level: 2,
      })
    ).toBeVisible();

    expect(await screen.findByText(/First Name: John Doe/i)).toBeVisible();
    expect(await screen.findByText(/E-mail: john@doe.com/i)).toBeVisible();
    expect(await screen.findByText(/Password: \*\*\*\*\*\*/i)).toBeVisible();
    expect(await screen.findByText(/Favorite color: red/i)).toBeVisible();
    expect(await screen.findByText(/Terms and condition: Agreed/i)).toBeVisible();
  });
});
