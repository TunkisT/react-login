import React from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const Register = () => {
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
          labelText='Password'
          type='password'
          placeholder='Password'
        />
        <Button type='submit'>Register</Button>
      </form>
    </>
  );
};

export default Register;
