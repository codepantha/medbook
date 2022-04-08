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
    <>
      <div className="rounded text-center max-w-sm overflow-hidden shadow-lg">
        <h1>
          Appointment date:
          {' '}
          {appointment.appointment_date}
        </h1>
        <h1>
          City:
          {' '}
          {appointment.city}
        </h1>
        <div>{`Doctor: ${getDoctorName()}`}</div>
        <div className="px-6 pt-4 pb-2 flex flex-col">
          <button type="button" className="bg-red-500 text-white hover:bg-red-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            Cancel appointment
          </button>
          <button type="button" className="bg-primary hover:bg-lime-400 rounded-full px-3 py-1 text-sm font-semibold text-primaryContrast mr-2 mb-2">
            Reschedule
          </button>
        </div>
      </div>
    </>
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
