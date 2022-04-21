import {
  FETCH_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_FAILURE,
  BOOK_NEW_APPOINTMENT,
  BOOK_NEW_APPOINTMENT_FAILURE,
} from '../actions/action';

const initialState = {
  appointments: [{}],
  status: '',
};

const appointmentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_APPOINTMENT_FAILURE:
      return state;

    case FETCH_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointments: payload,
      };

    case BOOK_NEW_APPOINTMENT_FAILURE:
      return {
        ...state,
        status: 'failed',
      };

    case BOOK_NEW_APPOINTMENT:
      return {
        ...state,
        status: 'success',
      };

    default:
      return state;
  }
};

export default appointmentReducer;
