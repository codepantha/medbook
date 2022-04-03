/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FaTwitter } from 'react-icons/fa';

import logo from '../../assets/logo.jpg';

function DoctorCard({ doctor }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {doctor.map((doc) => (
          <div
            key={doc.id}
            className="bg-indigo-500 rounded"
          >
            <div className="rounded rounded-full object-cover">
              <img src={logo} alt="doc" />
            </div>
            <h1>{doc.name}</h1>
            <h1>experience: </h1>
            <h1>{doc.experience}</h1>
            <div className="details-doc">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="social-icons">
              <FaTwitter />
              <FaTwitter />
              <FaTwitter />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.any.isRequired,
};

export default DoctorCard;
