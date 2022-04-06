import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, placeholder, name, value, handleChange,
}) => (
  <>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required
      className="input-field"
      onChange={handleChange}
    />
  </>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
