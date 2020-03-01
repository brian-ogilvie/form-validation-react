import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const FormDataContext = createContext();
export const FormSubmissionContext = createContext();

const initialState = {
  submitting: false,
  formData: {},
  seenFields: new Set(),
};

function reducer(state, action) {
  switch (action.type) {
    case 'submit':
      return {
        ...state,
        submitting: true,
      };
    case 'updateField': {
      const { name, value } = action.payload;
      const { formData } = state;
      return {
        ...state,
        formData: {
          ...formData,
          [name]: value,
        },
      };
    }
    case 'markAsSeen': {
      const seenFields = new Set([...state.seenFields]);
      seenFields.add(action.payload);
      return {
        ...state,
        seenFields,
      };
    }
    case 'reset':
      return initialState;
    default:
      throw new Error('unknown action type');
  }
}

export default function FormContextProvider({ children, onSubmit }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formData, seenFields, submitting } = state;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(state.formData);
    dispatch({ type: 'submit' });
  }

  function updateField({ target }) {
    dispatch({
      type: 'updateField',
      payload: target,
    });
  }

  function markAsSeen({ target }) {
    dispatch({
      type: 'markAsSeen',
      payload: target.name,
    });
  }

  function resetForm() {
    dispatch({ type: 'reset' });
  }

  return (
    <FormSubmissionContext.Provider
      value={{ handleSubmit, submitting, resetForm }}
    >
      <FormDataContext.Provider
        value={{ formData, seenFields, updateField, markAsSeen }}
      >
        {children}
      </FormDataContext.Provider>
    </FormSubmissionContext.Provider>
  );
}

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
