import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const res = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/register`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userDetails),
            }
          );
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
          labelText='Password'
          type='password'
          placeholder='Password'
          handleChange={(password) =>
            setUserDetails({ ...userDetails, password })
          }
        />
        <Button type='submit'>Register</Button>
      </form>
    </>
  );
};

export default Register;
