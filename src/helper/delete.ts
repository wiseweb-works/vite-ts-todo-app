import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from './api';

const deleteTodo = async (id: string): Promise<void> => {
  await api.delete(`/task/${id}`);
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
