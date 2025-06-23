import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Grid, IconButton, ListItem, Typography } from '@mui/material';

import { useDeleteTodo } from '../helper/delete';
import formatDate from '../helper/formatDate';
import { useTodos } from '../helper/get';
import { useUpdateTodo } from '../helper/put';

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodos();
  const { mutate: deleteTodo } = useDeleteTodo();
  const updateMutation = useUpdateTodo();

  const inProgress = todos?.filter((todo) => todo.isDone === false);
  const completed = todos?.filter((todo) => todo.isDone === true);

  const handleClick = (id: string, isDone: boolean) => {
    updateMutation.mutate({ id, isDone });
  };

  const handleDelete = (id: string) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this task?'
    );
    if (isConfirmed) {
      deleteTodo(id);
    }
  };

  if (isLoading) { return <p>Loading...</p>; }
  if (error) { return <p>Error: {error.message}</p>; }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        mt: 3,
      }}
    >
      <Grid
        size={{ xs: 12, sm: 10, md: 5 }}
        sx={{
          margin: '1rem',
          minHeight: '350px',
          maxHeight: '60vh',
          overflow: 'auto',
          p: 2,
          border: '2px solid #6A0DAD',
          boxShadow: '0px 4px 15px rgba(106, 13, 173, 0.2)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',

          '&:hover': {
            boxShadow: '0px 6px 18px rgba(106, 13, 173, 0.3)',
            transform: 'scale(1.05)',
          },
        }}
      >
        <Typography
          color="secondary"
          align="center"
          variant="h5"
          sx={{ mb: 1 }}
        >
          In Progress Todos
        </Typography>
        {inProgress && inProgress.length > 0 ? (
          inProgress.map((todo) => (
            <Typography
              key={todo.id}
              variant="h6"
              color="main"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <ListItem sx={{ flex: 3 }}>{todo.task}</ListItem>
              <ListItem sx={{ flex: 2 }}>{formatDate(todo.date)}</ListItem>
              <IconButton onClick={() => handleClick(todo.id, todo.isDone)}>
                <CheckBoxOutlineBlankOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(todo.id)} color="error">
                <DeleteOutlinedIcon />
              </IconButton>
            </Typography>
          ))
        ) : (
          <Typography>No Task</Typography>
        )}
      </Grid>
      <Grid
        size={{ xs: 12, sm: 10, md: 5 }}
        sx={{
          margin: '1rem',
          minHeight: '350px',
          maxHeight: '60vh',
          overflow: 'auto',
          p: 2,
          border: '2px solid #6A0DAD',
          boxShadow: '0px 4px 15px rgba(106, 13, 173, 0.2)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',

          '&:hover': {
            boxShadow: '0px 6px 18px rgba(106, 13, 173, 0.3)',
            transform: 'scale(1.05)',
          },
        }}
      >
        <Typography
          color="secondary"
          align="center"
          variant="h5"
          sx={{ mb: 1 }}
        >
          Completed Todos
        </Typography>
        {completed && completed.length > 0 ? (
          completed.map((todo) => (
            <Typography
              key={todo.id}
              variant="h6"
              color="main"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'line-through',
                textDecorationStyle: 'wavy',
                textDecorationColor: 'red',
              }}
            >
              <ListItem sx={{ flex: 3 }}>{todo.task}</ListItem>
              <ListItem sx={{ flex: 2 }}>{formatDate(todo.date)}</ListItem>
              <IconButton
                onClick={() => handleClick(todo.id, todo.isDone)}
                color="primary"
              >
                <CheckBoxOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(todo.id)} color="error">
                <DeleteOutlinedIcon />
              </IconButton>
            </Typography>
          ))
        ) : (
          <Typography>No Task</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
