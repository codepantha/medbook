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
    <div>
      <div className="text-center max-w-sm overflow-hidden flex items-center flex-col border">
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
          <img src={doctorPicture} alt="doc" className="rounded-full object-contain h-28 w-28" />
        </NavLink>
        <div>
          <h1 className="font-bold text-xl mb-2">{doctor.name}</h1>
          <h1 className="overline p-3 font-bold text-xl mb-2">
            Experience:
            {' '}
            {doctor.experience}
            {' '}
            years
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
