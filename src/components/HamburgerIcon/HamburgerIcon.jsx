import React from 'react';
import PropTypes from 'prop-types';

const HamburgerIcon = ({ handleMenu, menuOpened }) => (
  <button
    type="button"
    className={`transition duration-200 ease-in w-12 h-10 my-4 mr-4 flex flex-col justify-around fixed top-0 right-0 md:hidden z-50 ${
      menuOpened ? 'opened' : ''
    }`}
    onClick={handleMenu}
  >
    <div className="bar" />
    <div className="bar" />
    <div className="bar" />
  </button>
);

HamburgerIcon.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  menuOpened: PropTypes.bool.isRequired,
};
export default HamburgerIcon;
