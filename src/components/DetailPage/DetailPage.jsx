import React from 'react';
import MeredithGrey from '../../assets/doctors/MeredithGrey.jpeg';

const DetailPage = () => (
  <>
    <main className="flex h-5/6 justify-center gap-x-20 pt-20">
      <div>
        <img
          src={MeredithGrey}
          alt="Dr. Grey"
          className="rounded-3xl border-4 border-zinc-600 dark:border-neutral-300"
        />
      </div>
      <aside className="w-3/12 flex flex-col gap-y-5">
        <div>
          <p className="text-3xl font-bold text-right">Dr. Meredith Grey</p>
          <p className="text-lg text-right">General Surgeon</p>
        </div>
        <ul>
          <li className="flex justify-between bg-gray-300 dark:bg-gray-800 p-2">
            <p>Consultation Fee:</p>
            <p>$50</p>
          </li>
          <li className="flex justify-between bg-neutral-100 dark:bg-gray-600 p-2">
            <p>Experience:</p>
            <p>20 years</p>
          </li>
          <li className="flex justify-between bg-gray-300  dark:bg-gray-800 p-2">
            <p>Age:</p>
            <p>45 years</p>
          </li>
        </ul>
        <p>
          Meredith Grey is the head of general surgery and former Director of the Residency Program
          at Grey Sloan Memorial Hospital. She is the daughter of the now-deceased Ellis Grey, a
          famed general surgeon, and the now-deceased Thatcher Grey.
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-primary hover:bg-lime-400 p-4 rounded-full text-slate-50"
          >
            Appointment
          </button>
          <button
            type="button"
            className="bg-red-600 hover:bg-red-400 p-4 rounded-full text-slate-50"
          >
            Delete
          </button>
        </div>
      </aside>
    </main>
    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 bg-primary hover:bg-lime-400 font-bold text-3xl text-slate-50 pl-10 p-2  pr-3 rounded-r-full cursor-pointer"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </footer>
  </>
);

export default DetailPage;
