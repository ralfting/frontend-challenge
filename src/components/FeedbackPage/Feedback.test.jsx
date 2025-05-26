import { render, screen, waitFor } from '@testing-library/react';
import Feedback from './Feedback';
import userEvent from '@testing-library/user-event';

describe('Feedback', () => {
  it.each([
    {
      isSuccess: true,
      message: 'Operation successuly conclude',
      onRestart: jest.fn(),
    },
    {
      isSuccess: false,
      message: 'Something went wrong',
      onRestart: jest.fn(),
    },
  ])('shows feedback for isSuccess=${props.isSuccess}', async (props) => {
    render(
      <Feedback isSuccess={props.isSuccess} onRestart={props.onRestart} message={props.message} />
    );

    expect(await screen.findByText(props.message)).toBeVisible();

    if (props.isSuccess) {
      expect(await screen.findByText('Success!')).toBeVisible();
      expect(await screen.findByLabelText('Check circle success icon')).toBeVisible();
      expect(screen.queryByLabelText('Error Outline icon')).not.toBeInTheDocument();
    }
    if (props.isSuccess === false) {
      expect(await screen.findByText('Error!')).toBeVisible();
      expect(await screen.findByLabelText('Error Outline icon')).toBeVisible();
      expect(screen.queryByLabelText('Check circle success icon')).not.toBeInTheDocument();
    }
  });

  it('calls restart function', async () => {
    const onRestartMock = jest.fn();
    render(<Feedback message="Hello World" onRestart={onRestartMock} isSuccess />);

    await userEvent.click(await screen.findByRole('button', { name: /Restart/ }));

    await waitFor(() => {
      expect(onRestartMock).toHaveBeenCalled();
    });
  });
});
