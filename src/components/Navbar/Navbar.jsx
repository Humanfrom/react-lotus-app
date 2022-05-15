import React from 'react';
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'
import {privateRoutes} from '../../router/index.jsx'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
    
      <Link to='/'>На главную</Link>

      {privateRoutes.filter(route => route.path.length > 3).map(route =>
        <Link key={route.name} to={route.path}>
          {route.name}
        </Link>
      )}
    </div>
  );
}


export default Navbar;
