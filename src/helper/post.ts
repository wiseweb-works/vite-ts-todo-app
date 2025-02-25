import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from './api';

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo: { task: string; isDone: boolean }) => {
      const { data } = await api.post('/task', newTodo);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
