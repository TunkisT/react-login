import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Login from './Pages/Login';
import Register from './Pages/Register';
const data = [
  {
    title: 'Login',
    link: '/login',
  },
  {
    title: 'Register',
    link: '/register',
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation data={data} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
