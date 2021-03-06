/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  fetchDoctorSuccess,
  fetchDoctorFailure,
  fetchAppointmentFailure,
  fetchAppointmentSuccess,
  bookAppointment,
  BOOK_NEW_APPOINTMENT_FAILURE,
} from '../actions/action';

const domain = 'https://medbookapi.herokuapp.com';

const baseURL = `${domain}/api/v1/doctors`;

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
    .get(`${domain}/api/v1/users/${id}/appointments`)
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
  const apiURL = `${domain}/api/v1/users/${userId}/appointments`;
  return (dispatch) => {
    axios
      .post(
        apiURL,
        {
          doctor_id: doctorId,
          appointment_date: bookingDate,
          city,
        },
        {
          'Content-Type': 'application/json',
        },
      )
      .then((response) => {
        if (response.data.status === 'Success') {
          dispatch(
            bookAppointment({
              doctorId,
              bookingDate,
              city,
            }),
          );
        } else {
          dispatch({ type: BOOK_NEW_APPOINTMENT_FAILURE });
        }
      });
  };
};

export default domain;
