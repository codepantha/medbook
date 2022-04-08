export const FETCH_DOCTOR_SUCCESS = 'FETCH_DOCTOR_SUCCESS';
export const FETCH_DOCTOR_FAILURE = 'FETCH_DOCTOR_FAILURE';
export const FETCH_APPOINTMENT_SUCCESS = 'FETCH_APPOINTMENT_SUCCESS';
export const FETCH_APPOINTMENT_FAILURE = 'FETCH_APPOINTMENT_FAILURE';
export const BOOK_NEW_APPOINTMENT = 'BOOK_NEW_APPOINTMENT';
export const DELETE_DOCTOR = 'DELETE_DOCTOR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const fetchDoctorSuccess = (payload) => ({
  type: FETCH_DOCTOR_SUCCESS,
  payload,
});

export const fetchDoctorFailure = (payload) => ({
  type: FETCH_DOCTOR_FAILURE,
  payload,
});

export const fetchAppointmentSuccess = (payload) => ({
  type: FETCH_APPOINTMENT_SUCCESS,
  payload,
});

export const fetchAppointmentFailure = (payload) => ({
  type: FETCH_APPOINTMENT_FAILURE,
  payload,
});

export const bookAppointment = (payload) => ({
  type: BOOK_NEW_APPOINTMENT,
  payload,
});

export const deleteDoctor = (payload) => ({
  type: DELETE_DOCTOR,
  payload,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginUserFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});
