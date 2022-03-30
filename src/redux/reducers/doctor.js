/* eslint-disable no-unreachable */
import { FETCH_DOCTOR_SUCCESS, FETCH_DOCTOR_FAILURE } from '../actions/action';

const initialState = [];

const doctorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DOCTOR_SUCCESS:
      return payload;
      break;
    case FETCH_DOCTOR_FAILURE:
      return state;
      break;
    default:
      return state;
      break;
  }
};

export default doctorReducer;
