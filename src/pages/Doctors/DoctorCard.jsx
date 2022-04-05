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
      <div id="carouselExampleControls" className="grid grid-cols-3 gap-10">
        {doctor.map((doc) => (
          <div
            key={doc.id}
            className=" text-center max-w-sm overflow-hidden "
          >
            <div className="rounded rounded-full pt-4 carousel-item relative float-left w-full">
              <img src={logo} alt="doc" className="rounded-full object-contain h-28 w-28 ml-24" />
            </div>
            <div className="">
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
      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 bg-primary hover:bg-lime-400 font-bold text-3xl
        text-slate-50 pl-10 p-2  pr-3 rounded-r-full cursor-pointer
        absolute top-0 left-0 mt-4
        md:static float-right rotate-180
        "
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 bg-gray-200 hover:bg-lime-400 font-bold text-3xl
        text-slate-50 pl-10 p-2  pr-3 rounded-r-full cursor-pointer
        absolute top-0 left-0 mt-4
        md:static float-left
        "
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="oddeven"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="oddeven"
          />
        </svg>
      </footer>
    </div>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.any.isRequired,
};

export default DoctorCard;
