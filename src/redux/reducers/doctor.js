import {
  FETCH_DOCTOR_SUCCESS,
  FETCH_DOCTOR_FAILURE,
  DELETE_DOCTOR,
}
  from '../actions/action';

const initialState = [];

const doctorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DOCTOR_SUCCESS:
      return payload;

    case FETCH_DOCTOR_FAILURE:
      return state;

    case DELETE_DOCTOR: {
      return state;
    }

    default:
      return state;
  }
};

export default doctorReducer;
