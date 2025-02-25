import { useQuery } from '@tanstack/react-query';

import api from './api';

const fetchTodos = async (): Promise<TaskItem[]> => {
  const { data } = await api.get('/task');
  return data;
};

export const useTodos = () => {
  return useQuery<TaskItem[]>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5,
  });
};
