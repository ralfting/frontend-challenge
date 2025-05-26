import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'http://localhost:3001';

async function getColors() {
  const response = await fetch(`${BASE_URL}/api/colors`);
  return await response.json();
}

export function useGetColors() {
  const { data, ...rest } = useQuery({
    queryKey: ['colors'],
    queryFn: () => getColors(),
  });

  return { colors: data || [], ...rest };
}
