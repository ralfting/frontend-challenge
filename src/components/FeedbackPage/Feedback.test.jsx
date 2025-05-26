import { render } from '@testing-library/react';
import Feedback from './Feedback';

describe('Feedback', () => {
  it('shows a success feedback', async () => {
    render(
      <Feedback
        is="success"
        title="Success!"
        message="You should receive a confirmation email soon"
        buttonFn={jest.fn()}
        buttonText="reset"
      />
    );
  });
});
