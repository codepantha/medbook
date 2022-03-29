import { NavLink } from 'react-router-dom';

import React from 'react';
import logo from '../../assets/logo.jpg';
import darkLogo from '../../assets/logo_ccexpress.png';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = () => (
  <div className="bg-white col-span-2 shadow-lg dark:border-r dark:border-gray-800 dark-theme-bg theme-transition">
    <img
      src={logo}
      alt="logo"
      className="w-1/2 mx-auto mt-4 mb-6 bg-transparent rounded-md dark:hidden"
    />
    <img
      src={darkLogo}
      alt="logo"
      className="w-1/2 mx-auto mt-4 mb-6 bg-transparent rounded-md hidden dark:block"
    />

    <nav>
      <ul>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Doctors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/book-appointment" className="nav-link">
            Reserve
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/my-appointments" className="nav-link">
            My appointments
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add-doctor" className="nav-link">
            Add doctor
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/remove-doctor" className="nav-link">
            Delete doctor
          </NavLink>
        </li>
        <li className="nav-item">
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
