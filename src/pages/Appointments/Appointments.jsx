import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAp } from '../../redux/thunk/api';
import AppointmentCard from './AppointmentCard';

const Appointment = () => {
  const appointment = useSelector((state) => state.appointments);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAp(2));
  }, [dispatch]);

  const appointments = appointment.data;
  return (
    <>
      <div className="appointment-wrapper">
        <div className="appointment-title-holder">
          <h1 className="text-center text-bold text-2xl font-bold m-5">List of my appointments:</h1>
        </div>
        <AppointmentCard appointments={appointments} />
      </div>
    </>
  );
};

export default Appointment;
