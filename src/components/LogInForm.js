import React, { useContext } from 'react';
import Input from './Input';
import { FormSubmissionContext } from '../contexts/FormContextProvider';

export default function LogInForm() {
  const { submitting, handleSubmit, resetForm } = useContext(
    FormSubmissionContext
  );

  if (submitting) {
    return (
      <div>
        You have logged in!
        <button type="button" onClick={resetForm}>
          Fill out again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        required
        label="Email Address"
        errorMessage="Please enter a valid email."
        placeholder="e.g. mike@yahoo.com"
      />
      <Input
        name="password"
        type="password"
        required
        label="Password"
        errorMessage="Please enter your password."
        placeholder="enter password"
        minLength={8}
      />
      <button type="submit">Log In</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}
