import {
  FETCH_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_FAILURE,
} from '../actions/action';

const initialState = [];

const appointmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_APPOINTMENT_FAILURE:
      return state;

    case FETCH_APPOINTMENT_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default appointmentReducer;
