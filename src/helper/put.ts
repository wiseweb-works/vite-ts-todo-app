import { useMutation, useQueryClient } from '@tanstack/react-query';

import api from './api';

const updateTodo = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  const { data } = await api.put(`/task/${id}`, { isDone: !isDone });
  return data;
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
