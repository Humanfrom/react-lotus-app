import React from 'react';
import {privateRoutes} from '../router/index.jsx'
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
      <Routes>
          {privateRoutes.map(route => <Route
          path={route.path}
          element={route.component}
          replace={route.replace}
          key={route.path}
          />)}
      </Routes>
  );
}


export default AppRouter;
