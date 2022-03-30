/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { fetchDoctorSuccess, fetchDoctorFailure } from '../actions/action';

const baseURL = 'http://127.0.0.1:3000/api/v1/doctors';

export const fetchD = () => (dispatch) => {
  axios
    .get(baseURL)
    .then((res) => {
      const doctors = res.data;
      console.log(doctors);

      dispatch(fetchDoctorSuccess(doctors));
    })
    .catch((err) => {
      dispatch(fetchDoctorFailure(err.message));
    });
};
