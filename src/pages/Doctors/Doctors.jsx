/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import 'tw-elements';
import { fetchD } from '../../redux/thunk/api';
import DoctorCard from './DoctorCard';

const Doctors = () => {
  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const resultsRender = [];
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    dispatch(fetchD());
  }, [dispatch]);

  const modifyResults = () => {
    const steps = isMobile ? 1 : 3;
    for (let i = 0; i < doctors.length; i += steps) {
      resultsRender.push(
        <div className={`carousel-item ${i === 0 ? 'active' : ''} relative float-left w-full `}>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            {doctors.slice(i, i + steps).map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor.id} />
            ))}
          </div>
        </div>,
      );
    }
    return resultsRender;
  };

  return (
    <main className="grid content-center h-screen gap-14">
      <div>
        <h1 className="text-center text-4xl md:text-6xl mb-4 font-bold">Doctors List</h1>
        <p className="text-center text-gray-400 font-bold text-md md:text-lg">
          Please select a doctor
        </p>
      </div>
      <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
          {modifyResults()}
          <button
            className="bg-primary w-max h-max pl-8 pr-4 py-4 rounded-r-full absolute top-1/2 bottom-0 flex items-center justify-center text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primaryContrast"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="bg-primary w-max h-max pr-6 pl-4 py-4  rounded-l-full absolute top-1/2 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primaryContrast"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Doctors;
