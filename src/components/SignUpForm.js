import React, { useContext } from 'react';
import { FormSubmissionContext } from '../contexts/FormContextProvider';
import Input from './Input';

export default function SignUpForm() {
  const { submitting, handleSubmit, resetForm } = useContext(
    FormSubmissionContext
  );

  if (submitting) {
    return (
      <div>
        Thank you!
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
        name="zip"
        required
        label="Zip Code"
        errorMessage="Please enter a valid zip code."
        placeholder="enter zip code"
        pattern="^\d{5}(-\d{4})?$"
      />

      <Input
        name="birthday"
        type="date"
        label="Birthday"
        errorMessage="Birthday must be a valid date"
      />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}
