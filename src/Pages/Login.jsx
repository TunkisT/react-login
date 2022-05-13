import React from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const Login = () => {
  return (
    <>
      <form>
        <Input
          name='email'
          labelText='Email'
          type='email'
          placeholder='Email'
        />
        <Input
          name='password'
          labelText='password'
          type='password'
          placeholder='Password'
        />
        <Button type='submit'>login</Button>
      </form>
    </>
  );
};

export default Login;
