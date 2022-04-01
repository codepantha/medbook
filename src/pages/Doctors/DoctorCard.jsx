/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function DoctorCard({ doctor }) {
  return (
    <>
      <div>
        {doctor.map((doc) => (
          <div
            key={doc.id}
            className='"max-w-sm rounded overflow-hidden shadow-lg'
          >
            <h1>{doc.name}</h1>
            <h1>experience: {doc.experience}</h1>
            <img src={doc.profile_pic} alt='doctor' />
          </div>
        ))}
      </div>
    </>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.any.isRequired,
};

export default DoctorCard;
