import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAp } from '../../redux/thunk/api';

const Appointment = () => {
  const appointment = useSelector((state) => state.appointments);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAp(1));
  }, [dispatch]);

  const appointments = appointment.data;
  return (
    <>
      <div>{appointments && appointments.map((app) => <h1 key={app.id}>{app.city}</h1>)}</div>
    </>
  );
};

export default Appointment;
