import { useQuery } from '@tanstack/react-query';
import { axios } from '@/lib';
import type { ExtractFnReturnType } from '@/types';
import type { Resource } from '@/features/laravel';

export const getResources = async (): Promise<Resource[]> => {
  const response = await axios.get('/api/v1/resources');

  return response.data;
};

export const useResources = () =>
  useQuery<ExtractFnReturnType<typeof getResources>>({
    queryKey: ['resources'],
    queryFn: () => getResources(),
  });
