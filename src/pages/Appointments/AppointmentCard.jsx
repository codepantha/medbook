/* eslint-disable react/jsx-one-expression-per-line */
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
            className="rounded text-center max-w-sm rounded overflow-hidden shadow-lg"
          >
            <h1>Appointment date: {app.appointment_date}</h1>
            <h1>City: {app.city}</h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Cancel appointment</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Choose another date</span>
            </div>
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
