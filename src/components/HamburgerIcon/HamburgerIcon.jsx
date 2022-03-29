import React from 'react';
import PropTypes from 'prop-types';

const HamburgerIcon = ({ handleMenu, menuOpened }) => (
  <button
    type="button"
    className={`transition duration-200 ease-in w-12 h-10 my-4 ml-4 flex flex-col justify-around fixed top-0 left-0 md:hidden ${
      menuOpened ? '' : 'opened'
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
