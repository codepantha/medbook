import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAp, fetchD } from '../../redux/thunk/api';

import AppointmentCard from './AppointmentCard';

const Appointment = () => {
  const appointment = useSelector((state) => state.appointments);
  const doctors = useSelector((state) => state.doctor);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAp(1));
    dispatch(fetchD());
  }, [dispatch]);

  const appointments = appointment.data;
  return (
    <>
      <div className="appointment-wrapper">
        <div className="appointment-title-holder">
          <h1 className="text-center text-bold text-2xl font-bold m-5">List of my appointments:</h1>
        </div>
        <AppointmentCard appointments={appointments} doctors={doctors} />
      </div>
    </>
  );
};

export default Appointment;
