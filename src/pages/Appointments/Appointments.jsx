import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAp, fetchD } from '../../redux/thunk/api';

import AppointmentCard from './AppointmentCard';

const Appointment = () => {
  const appointments = useSelector(
    (state) => state.appointments.appointments.data,
  );
  const { currentUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAp(currentUser.id));
    dispatch(fetchD());
  }, [dispatch]);

  return (
    <>
      <div className="appointment-wrapper">
        <div className="appointment-title-holder">
          <h1 className="text-center text-bold text-2xl font-bold m-5">
            List of my appointments:
          </h1>
        </div>
        {appointments?.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </>
  );
};

export default Appointment;
