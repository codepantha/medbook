/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchD } from '../../redux/thunk/api';
import DoctorCard from './DoctorCard';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchD());
  }, [dispatch]);

  return (
    <>
      <h1>Available Doctors:</h1>
      <div><DoctorCard doctor={doctor} /></div>
    </>
  );
};

export default Doctor;
