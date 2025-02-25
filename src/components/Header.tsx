import { Typography } from '@mui/material';

const Header = () => {
  return (
    <Typography
      component="h1"
      variant="h3"
      align="center"
      sx={{
        background: 'linear-gradient(120deg, #6a11cb, #2575fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        letterSpacing: '1px',
        padding: '1rem',
        marginBottom: '1.5rem',
      }}
    >
      TypeScript Todo App
    </Typography>
  );
};

export default Header;
