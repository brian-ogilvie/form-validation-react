import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormDataContext } from '../contexts/FormContextProvider';

export default function Input({
  name,
  type,
  required,
  pattern,
  minLength,
  maxLength,
  label,
  errorMessage,
}) {
  const { formData, seenFields, updateField, markAsSeen } = useContext(
    FormDataContext
  );
  return (
    <div className="input-wrapper">
      <label htmlFor={`input-${name}`}>
        <input
          id={`input-${name}`}
          name={name}
          type={type}
          required={required}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          value={formData[name] || ''}
          onChange={updateField}
          onBlur={markAsSeen}
          className={seenFields.has(name) ? 'seen' : null}
        />
        <div className="error-message">{errorMessage}</div>
        <div className="input-label">{label}</div>
      </label>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  type: 'text',
  required: false,
  pattern: null,
  errorMessage: null,
  minLength: null,
  maxLength: null,
};
