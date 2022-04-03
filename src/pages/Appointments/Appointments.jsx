import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAp } from '../../redux/thunk/api';

const Appointment = () => {
  const appointment = useSelector((state) => state.appointments);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAp(2));
  }, [dispatch]);
  return (
    <>
      <div>{console.log('From the UI', appointment)}</div>
    </>
  );
};

export default Appointment;
