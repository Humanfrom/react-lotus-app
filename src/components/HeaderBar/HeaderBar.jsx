import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const HeaderBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Лотос
        </Typography>
        <Stack spacing={2} direction="row">
          <Button color="inherit" onClick={() => navigate('/login')}>Войти</Button>
          <Button variant="outlined" color="inherit">Регистрация</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}


export default HeaderBar;
