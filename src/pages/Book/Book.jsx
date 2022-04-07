import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
// import PropTypes from 'prop-types';
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
      <form className="flex flex-col gap-3 p-5" onSubmit={(e) => submitAppointmentToStore(e, dispatch, startDate.toISOString().split('T')[0])}>
        {/* {id !== 0
          && console.log('pumas')} */}
        <select
          id="doctors"
          className="border-solid border-2 p-3 rounded-full"
        >
          {
            doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.specialty}
                :
                {' '}
                {doctor.name}
              </option>
            ))
          }
        </select>
        <input type="text" id="city" placeholder="City" required className="border-solid border-b-2 p-3" />
        <p className="text-xl">Select your date:</p>
        <div className="text-xl border-primary border-2 border-solid m-0 rounded-full w-30 p-3 flex flex-col items-center">
          <DatePicker
            minDate={new Date()}
            wrapperClassName="content-center w-auto"
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            onChange={(startDate) => setStartDate(startDate)}
          />
        </div>
        <input
          type="submit"
          value="Appointment"
          className="bg-primary hover:bg-lime-400 p-4 rounded-full text-slate-50 cursor-pointer"
        />
      </form>
    </main>
  );
};

// Reserve.defaultProps = {
//   data: {},
//   id: 0,
// };

// Reserve.propTypes = {
//   data: PropTypes.objectOf(
//     PropTypes.number,
//   ),
//   id: PropTypes.number,
// };

export default Reserve;
