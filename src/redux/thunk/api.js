/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
  fetchDoctorSuccess,
  fetchDoctorFailure,
  fetchAppointmentFailure,
  fetchAppointmentSuccess,
  bookAppointment,
} from '../actions/action';

const baseURL = 'http://127.0.0.1:3000/api/v1/doctors';

export const fetchD = () => (dispatch) => {
  axios
    .get(baseURL)
    .then((res) => {
      const doctors = res.data;
      dispatch(fetchDoctorSuccess(doctors));
    })
    .catch((err) => {
      dispatch(fetchDoctorFailure(err.message));
    });
};

export const fetchAp = (id) => (dispatch) => {
  axios
    .get(`http://127.0.0.1:3000/api/v1/users/${id}/appointments`)
    .then((res) => {
      const appointments = res.data;
      dispatch(fetchAppointmentSuccess(appointments));
    })
    .catch((err) => {
      dispatch(fetchAppointmentFailure(err.message));
    });
};

export const addAppointment = ({
  doctorId, bookingDate, city, userId,
}) => {
  console.log(doctorId);
  console.log(bookingDate);
  console.log(city);
  console.log(userId);
  const apiURL = 'http://127.0.0.1:3000/api/v1/users/4/appointments';
  return (dispatch) => {
    axios.post(apiURL, {
      doctor_id: doctorId,
      appointment_date: bookingDate,
      city,
    }, {
      'Content-Type': 'application/json',
    })
      .then((response) => {
        console.log('Pumas');
        console.log(response);
        if (response.status === 'Success') {
          dispatch(bookAppointment({
            doctorId, bookingDate, city,
          }));
        }
      });
  };
};
