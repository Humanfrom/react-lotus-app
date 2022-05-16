import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import HeaderBar from './components/HeaderBar/HeaderBar.jsx'
import AppRouter from './components/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <HeaderBar />
      <AppRouter />
      <Navbar />
    </BrowserRouter>
  );
}


export default App;
