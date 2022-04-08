import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function AppointmentCard({ appointment }) {
  const doctors = useSelector((state) => state.doctor);

  const getDoctorName = () => {
    const [doctor] = doctors.filter(
      (doctor) => doctor.id === appointment.doctor_id,
    );
    return doctor?.name;
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div className="rounded text-center max-w-sm overflow-hidden shadow-lg">
          <h1>
            Appointment date:
            {appointment.appointment_date}
          </h1>
          <h1>
            City:
            {appointment.city}
          </h1>
          <div>{getDoctorName()}</div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
              Cancel appointment
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
              Choose another date
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

AppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    doctor_id: PropTypes.number,
    city: PropTypes.string,
    appointment_date: PropTypes.string,
    created_at: PropTypes.string,
  }),
};

AppointmentCard.defaultProps = {
  appointment: {},
};

export default AppointmentCard;
