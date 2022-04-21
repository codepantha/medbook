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
      <div className="appointment-wrapper py-16 md:py-0">
        <div className="appointment-title-holder mb-10">
          <h1 className="text-center text-bold text-2xl font-bold m-5">
            List of my appointments:
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {appointments?.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Appointment;
