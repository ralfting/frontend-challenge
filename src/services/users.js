import { useMutation } from '@tanstack/react-query';
import { BASE_URL } from './contants';

async function createUser(payload) {
  const response = await fetch(`${BASE_URL}/api/submit`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  return response;
}

export function useCreateUser() {
  const { mutate, ...rest } = useMutation({
    mutationFn: createUser,
  });

  return { createUser: mutate, ...rest };
}
