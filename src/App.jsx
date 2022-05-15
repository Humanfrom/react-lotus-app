import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import AppRouter from './components/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}


export default App;
