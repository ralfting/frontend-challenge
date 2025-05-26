import { render, screen } from '@testing-library/react';
import AlertFieldError from './AlertFieldError';

describe('AlertFieldError', () => {
  it('shows errors from props', async () => {
    const errors = {
      name: {
        message: 'Name cannot be empty',
      },
      email: {
        message: 'E-mail cannot be empty',
      },
    };
    render(<AlertFieldError errors={errors} />);

    expect(await screen.findByText(/Some fields need your attention/)).toBeVisible();
    expect(await screen.findByText(/name/)).toBeVisible();
    expect(await screen.findByText(/email/)).toBeVisible();
  });

  it('does not show alert component if no error', async () => {
    const errors = {};

    const { container } = render(<AlertFieldError errors={errors} />);

    expect(container.firstChild).toBeNull();
  });
});
