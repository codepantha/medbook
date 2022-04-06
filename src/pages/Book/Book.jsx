import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { fetchD } from '../../redux/thunk/api';
import 'react-datepicker/dist/react-datepicker.css';

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
      <form className="flex flex-col gap-3 p-5">
        <select id="doctors" className="border-solid border-2 p-3 rounded-full">
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
        <input type="text" placeholder="City" required className="border-solid border-b-2 p-3" />
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
          onClick={() => {
            console.log(startDate.toISOString().split('T')[0]);
            console.log(document.getElementById('doctors').value);
          }}
        />
      </form>
    </main>
  );
};
export default Reserve;
