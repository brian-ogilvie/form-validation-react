import React from 'react';
import FormContextProvider from '../contexts/FormContextProvider';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
  function signUp(formData) {
    console.log('sign up', { formData });
  }

  return (
    <>
      <h1>Sign up</h1>
      <FormContextProvider onSubmit={signUp}>
        <SignUpForm />
      </FormContextProvider>
    </>
  );
}
