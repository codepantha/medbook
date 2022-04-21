import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Input = ({
  type, placeholder, name, value, handleChange,
}) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`input-field ${
          pathname.includes('landing-page') ? 'dark:bg-white dark:text-black' : ''
        }`}
        onChange={handleChange}
        required
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: null,
};

export default Input;
