/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import domain from '../../redux/thunk/api';

function DoctorCard({ doctor }) {
  const [doctorPicture, setDoctorPicture] = useState('');
  const fetchDoctorImage = async () => {
    const response = await fetch(`${domain}/api/v1/doctors/${doctor.id}/profile_pic`);
    const data = await response.json();
    setDoctorPicture(data.profile_pic_url);
  };

  useEffect(() => fetchDoctorImage(), []);

  return (
    <div>
      <div id="carouselExampleControls" className="grid grid-cols-3 gap-10">
        <div className=" text-center max-w-sm overflow-hidden ">
          <NavLink
            to={`doctor-details/${doctor.id}`}
            state={{
              id: doctor.id,
              name: doctor.name,
              image: doctorPicture,
              specialty: doctor.specialty,
              age: doctor.age,
              bio: doctor.bio,
              experience: doctor.experience,
              fee: parseFloat(doctor.consultation_fee),
            }}
          >
            <div className="rounded-full pt-4 carousel-item relative float-left w-full">
              <img
                src={doctorPicture}
                alt="doc"
                className="rounded-full object-contain h-28 w-28 ml-24"
              />
            </div>
          </NavLink>
          <div className="">
            <h1 className="font-bold text-xl mb-2">{doctor.name}</h1>
            <h1 className="overline p-3 font-bold text-xl mb-2">
              Experience: {doctor.experience} years
            </h1>
            <div className="text-gray-700 text-base">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button
              type="button"
              href="https://twitter.com/"
              className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <FaFacebookF size={20} />
            </button>
            <button
              type="button"
              href="https://twitter.com/"
              className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <FaTwitter size={20} />
            </button>
            <button
              type="button"
              href="https://twitter.com/"
              className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <FaLinkedinIn size={20} />
            </button>
          </div>
        </div>
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
