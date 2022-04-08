import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import domain from '../../redux/thunk/api';

const DoctorCard = ({ doctor }) => {
  const [doctorPicture, setDoctorPicture] = useState('');
  const fetchDoctorImage = async () => {
    const response = await fetch(`${domain}/api/v1/doctors/${doctor.id}/profile_pic`);
    const data = await response.json();
    setDoctorPicture(data.profile_pic_url);
  };

  useEffect(() => fetchDoctorImage(), []);

  return (
    <div className="h-full grid">
      <div className="text-center max-w-sm mx-auto border rounded-lg p-4 w-3/4 md:w-full dark-theme-bg theme-transition">
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
            fee: doctor.consultation_fee,
          }}
        >
          <img
            src={doctorPicture}
            alt="doc"
            className="rounded-full object-contain h-40 w-40 mx-auto"
          />

          <div>
            <h3 className="font-bold text-xl mb-2">{doctor.name}</h3>
            <h3 className="overline p-3 font-bold text-xl mb-2">
              Experience:
              {' '}
              {doctor.experience}
              {' '}
              years
            </h3>
            <div>
              <p className="text-[#b7b9b9]">{doctor.bio}</p>
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
        </NavLink>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    bio: PropTypes.string,
    specialty: PropTypes.string,
    age: PropTypes.number,
    experience: PropTypes.number,
    consultation_fee: PropTypes.string,
    date_of_birth: PropTypes.string,
    updated_at: PropTypes.string,
    created_at: PropTypes.string,
  }).isRequired,
};

export default DoctorCard;
