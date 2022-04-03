/* eslint-disable no-case-declarations */
import _ from 'lodash';
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
      const newState = _.filter(
        state,
        (appointments) => appointments.All.user === payload,
      );
      return newState;

    default:
      return state;
  }
};

export default appointmentReducer;
