import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
console.log(process.env.REACT_APP_SERVER_URL);

const Login = () => {
  const [userDetails, setUserDetails] = useState('');
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
          });
          const data = await res.json();
          console.log(data);
        }}
      >
        <Input
          name='email'
          labelText='Email'
          type='email'
          placeholder='Email'
          handleChange={(email) => setUserDetails({ ...userDetails, email })}
        />
        <Input
          name='password'
          labelText='password'
          type='password'
          placeholder='Password'
          handleChange={(password) =>
            setUserDetails({ ...userDetails, password })
          }
        />
        <Button type='submit'>login</Button>
      </form>
    </>
  );
};

export default Login;
