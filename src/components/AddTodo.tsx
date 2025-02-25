import { Box, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';

import { useAddTodo } from '../helper/post';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const mutation = useAddTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) {return;}

    mutation.mutate({ task, isDone: false });
    setTask('');
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        maxWidth: 600,
        mx: 'auto',
        mt: 3,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          variant="outlined"
          fullWidth
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: '#fff',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={mutation.isPending}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          {mutation.isPending ? 'Adding...' : 'Save'}
        </Button>
      </Box>
    </Paper>
  );
};

export default AddTodo;
