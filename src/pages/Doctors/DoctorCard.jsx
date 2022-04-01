/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function DoctorCard({ doctor }) {
  return (
    <>
      <div>{doctor.map((doc) => <div key={doc.id} className='"max-w-sm rounded overflow-hidden shadow-lg'>{doc.name}</div>)}</div>
    </>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.any.isRequired,
};

export default DoctorCard;
