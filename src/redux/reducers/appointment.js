import {
  FETCH_APPOINTMENT_SUCCESS,
  FETCH_APPOINTMENT_FAILURE,
  BOOK_NEW_APPOINTMENT,
} from '../actions/action';

const initialState = {
  appointments: [],
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

    case BOOK_NEW_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, payload],
      };

    default:
      return state;
  }
};

export default appointmentReducer;
