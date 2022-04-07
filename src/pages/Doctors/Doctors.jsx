import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchD } from '../../redux/thunk/api';
import DoctorCard from './DoctorCard';

const Doctors = () => {
  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchD());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center text-bold text-2xl font-bold m-5">Available Doctors:</h1>
      <div>
        <div id="carouselExampleControls" className="grid grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))}
        </div>
        <div className="button-class flex justify-between inset-y-0" />
      </div>
      <footer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 bg-primary hover:bg-lime-400 font-bold text-3xl
        text-slate-50 pl-10 p-2  pr-3 rounded-r-full cursor-pointer
        absolute top-0 left-0 mt-4
        md:static float-right rotate-180
        "
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 bg-gray-200 hover:bg-lime-400 font-bold text-3xl
        text-slate-50 pl-10 p-2  pr-3 rounded-r-full cursor-pointer
        absolute top-0 left-0 mt-4
        md:static float-left
        "
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="oddeven"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="oddeven"
          />
        </svg>
      </footer>
    </>
  );
};

export default Doctors;
