import React from 'react';
import FormContextProvider from '../contexts/FormContextProvider';
import LogInForm from '../components/LogInForm';

export default function LogIn() {
  function logIn(formData) {
    console.log('log in', { formData });
  }
  return (
    <>
      <h1>Log in</h1>
      <FormContextProvider onSubmit={logIn}>
        <LogInForm />
      </FormContextProvider>
    </>
  );
}
