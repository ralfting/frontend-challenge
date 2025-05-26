import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from './contants';

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
