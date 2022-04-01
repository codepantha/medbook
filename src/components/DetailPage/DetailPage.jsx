import React from 'react';
import MeredithGrey from '../../assets/doctors/MeredithGrey.jpeg';
// import PropTypes from 'prop-types';

const DetailPage = () => (
  <>
    <main className="flex h-5/6 justify-center gap-x-20 pt-20">
      <div className="">
        <img src={MeredithGrey} alt="Dr. Grey" className="rounded-3xl border-4 border-zinc-600" />
      </div>
      <aside className="w-3/12 flex flex-col gap-y-5">
        <div>
          <p className="text-3xl font-bold">Dr. Meredith Grey</p>
          <p className="text-lg">General Surgeon</p>
        </div>
        <ul>
          <li className="flex justify-between bg-gray-300 p-2">
            <p>Consultation Fee:</p>
            <p>$50</p>
          </li>
          <li className="flex justify-between bg-neutral-100 p-2">
            <p>Experience:</p>
            <p>20 years</p>
          </li>
          <li className="flex justify-between bg-gray-300 p-2">
            <p>Age:</p>
            <p>45 years</p>
          </li>
        </ul>
        <p>
          Meredith Grey is the head of general surgery and former Director of the Residency
          Program at Grey Sloan Memorial Hospital. She is the daughter of the now-deceased Ellis
          Grey, a famed general surgeon, and the now-deceased Thatcher Grey.
        </p>
        <div className="flex justify-between">
          <button type="button" className="bg-primary p-4 rounded-full text-slate-50">Appointment</button>
          <button type="button" className="bg-red-600 p-4 rounded-full text-slate-50">Delete</button>
        </div>
      </aside>
    </main>
    <footer>
      <button type="button" className="bg-primary font-bold text-3xl text-slate-50 pl-10 p-2  pr-3 rounded-r-full">&#60;</button>
    </footer>
  </>
);

export default DetailPage;
