/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchD } from '../../redux/thunk/api';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchD());
  }, [dispatch]);

  return (
    <>
      <div>{console.log('UI rendered', { doctor })}</div>
    </>
  );
};

export default Doctor;
