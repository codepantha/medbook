/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function AppointmentCard({ appointments }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {appointments && appointments.map((app) => (
          <div
            key={app.id}
            className="bg-indigo-500 rounded"
          >
            <h1>{app.appointment_date}</h1>
            <h1>{app.city}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

AppointmentCard.propTypes = {
  appointments: PropTypes.any.isRequired,
};

export default AppointmentCard;
