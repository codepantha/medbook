export const FETCH_DOCTOR_SUCCESS = 'FETCH_DOCTOR_SUCCESS';
export const FETCH_DOCTOR_FAILURE = 'FETCH_DOCTOR_FAILURE';

export const fetchDoctorSuccess = (payload) => ({
  type: FETCH_DOCTOR_SUCCESS,
  payload,
});

export const fetchDoctorFailure = (payload) => ({
  type: FETCH_DOCTOR_FAILURE,
  payload,
});
