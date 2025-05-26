import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignUpForm from './SignUpForm';
import { renderWithRouter } from '../../../test/utils';

describe('SignUpForm', () => {
  it('renders initial step page', async () => {
    renderWithRouter(<SignUpForm />, { route: '/' });

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
        renderWithRouter(<SignUpForm />, {
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
        renderWithRouter(<SignUpForm />, {
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
        renderWithRouter(<SignUpForm />, {
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
        renderWithRouter(<SignUpForm />, {
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
        renderWithRouter(<SignUpForm />, { route: '/' });

        await userEvent.type(await screen.findByLabelText('First Name'), 'A{backspace}');

        expect(await screen.findByText(/First name must be at least 2 characters/)).toBeVisible();

        await userEvent.type(await screen.findByLabelText('E-mail'), 'user');

        expect(await screen.findByText(/Please enter a valid email address/)).toBeVisible();

        await userEvent.type(await screen.findByLabelText('Password'), '1');

        expect(await screen.findByText(/Password must be at least 6 characters/)).toBeVisible();
      });
    });
  });
});
