import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export function renderWithRouter(ui, { route = '/' } = {}) {
  return {
    ...render(ui, {
      wrapper: () => <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>,
    }),
  };
}
