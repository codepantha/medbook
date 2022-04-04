/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import logo from '../../assets/logo.jpg';

function DoctorCard({ doctor }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 ">
        {doctor.map((doc) => (
          <div
            key={doc.id}
            className="rounded text-center max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div className="rounded rounded-full pt-4">
              <img src={logo} alt="doc" className="rounded-full object-contain h-48 w-86 ml-20" />
            </div>
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">{doc.name}</h1>
              <h1 className="overline p-3 font-bold text-xl mb-2">Experience: {doc.experience} years</h1>
              <div className="text-gray-700 text-base">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaFacebookF size={20} /></span>
              <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaTwitter size={20} /></span>
              <span className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FaLinkedinIn size={20} /></span>
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
