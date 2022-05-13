import React from 'react';
import Navigation from './Navigation';

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

export default {
  title: 'Navigation',
  component: Navigation,
};

export const Default = () => {
  return <Navigation data={data}/>;
};
