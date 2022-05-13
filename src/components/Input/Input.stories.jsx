import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const primary = () => (
  <Input
    name='email'
    labelText='Email'
    inputType='password'
    placeholder='Password'
  />
);
