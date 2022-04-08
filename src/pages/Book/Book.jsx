import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { fetchD, addAppointment } from '../../redux/thunk/api';
import 'react-datepicker/dist/react-datepicker.css';

const submitAppointmentToStore = (e, dispatch, startDate) => {
  e.preventDefault();
  const newAppointment = {
    doctorId: parseInt(document.getElementById('doctors').value, 10),
    bookingDate: startDate,
    city: document.getElementById('city').value,
    userId: 1,
  };
  dispatch(addAppointment(newAppointment));
};

const Reserve = () => {
  const doctors = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchD());
  }, [dispatch]);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <main className="flex flex-col h-full justify-center items-center gap-10">
      <p className="text-3xl font-bold text-center">New Appointment</p>
      <form
        className="flex flex-col gap-3 p-5"
        onSubmit={(e) => submitAppointmentToStore(e, dispatch, startDate.toISOString().split('T')[0])}
      >
        <div className="relative">
          <select
            id="doctors"
            className="border-solid border-2 p-3 rounded-full dark-theme-bg theme-transition dark:border-slate-600 appearance-none w-full"
          >
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.specialty}
                :
                {' '}
                {doctor.name}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <input
          type="text"
          id="city"
          placeholder="City"
          required
          className="border-solid border-b-2 p-3 dark-theme-bg theme-transition dark:border-slate-600"
        />
        <p className="text-xl">Select appointment date:</p>
        <div className="text-xl border-primary dark:border-slate-600 border-2 border-solid m-0 rounded-full w-30 p-3 flex flex-col items-center">
          <DatePicker
            minDate={new Date()}
            wrapperClassName="content-center w-auto"
            className="dark:bg-inherit"
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(startDate) => setStartDate(startDate)}
          />
        </div>
        <input
          type="submit"
          value="Appointment"
          className="bg-primary hover:bg-lime-400 p-4 rounded-full text-slate-50 cursor-pointer dark:text-black dark:bg-primary dark:hover:bg-lime-400 "
        />
      </form>
    </main>
  );
};

export default Reserve;
