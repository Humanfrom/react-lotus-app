import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'
import {privateRoutes} from '../../router/index.jsx'
import { Paper, BottomNavigationAction, BottomNavigation } from '@mui/material'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       <BottomNavigationAction label="Видео" icon={<OndemandVideoIcon />} />
       <BottomNavigationAction label="Библиотека" icon={<LibraryBooksIcon />} />
       <BottomNavigationAction label="Новости" icon={<NewspaperIcon />} />
       <BottomNavigationAction label="Профиль" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Paper>

  );
}

export default Navbar;
