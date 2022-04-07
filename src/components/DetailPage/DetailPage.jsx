import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import MeredithGrey from '../../assets/doctors/MeredithGrey.jpeg';

const DetailPage = ({
  data: {
    id, name, image, specialty, age, bio, experience, fee,
  },
}) => (
  <>
    <main key={id} className="flex flex-col bg-inherit md:h-5/6 md:justify-center gap-x-20 pt-20 pb-5 md:pb-0 md:flex-row px-4 md:px-0">
      <div>
        <img
          src={image}
          alt={name}
          className="rounded-3xl border-4 border-zinc-600 dark:border-neutral-300"
        />
      </div>
      <aside className="md:w-3/12 flex flex-col gap-y-5">
        <div className="md:block flex flex-col gap-y-3 pt-3">
          <p className="text-3xl font-bold md:text-right text-center">
            Dr.
            {' '}
            {name}
          </p>
          <p className="text-lg md:text-right text-center">{specialty}</p>
        </div>
        <ul>
          <li className="flex justify-between bg-gray-300 dark:bg-gray-800 p-2">
            <p>Consultation Fee: </p>
            <p>
              {' '}
              $
              {fee}
            </p>
          </li>
          <li className="flex justify-between bg-neutral-100 dark:bg-gray-600 p-2">
            <p>Experience:</p>
            <p>
              {experience}
              {' '}
              years
            </p>
          </li>
          <li className="flex justify-between bg-gray-300  dark:bg-gray-800 p-2">
            <p>Age:</p>
            <p>
              {age}
              {' '}
              years
            </p>
          </li>
        </ul>
        <p>
          {bio}
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
      <NavLink
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 bg-primary hover:bg-lime-400 font-bold text-3xl
          text-slate-50 pl-10 p-2  pr-3 rounded-r-full cursor-pointer
          absolute top-0 left-0 mt-4
          md:static
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
      </NavLink>
    </footer>
  </>
);

DetailPage.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.number,
    PropTypes.string,
    PropTypes.number,
    PropTypes.number,
  ),
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  specialty: PropTypes.string,
  age: PropTypes.number,
  bio: PropTypes.string,
  experience: PropTypes.number,
  fee: PropTypes.number,
};

DetailPage.defaultProps = {
  data: {},
  id: 0,
  name: '',
  image: '',
  specialty: '',
  age: 0,
  bio: '',
  experience: 0,
  fee: 0,
};

export default DetailPage;
