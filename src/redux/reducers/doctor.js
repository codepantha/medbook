import {
  FETCH_DOCTOR_SUCCESS,
  FETCH_DOCTOR_FAILURE,
  DELETE_DOCTOR,
}
  from '../actions/action';

// const initialState = {
//   doctors: [],
// };
// // eslint-disable-next-line
// let cacheDoctors = [];

const initialState = [];

const doctorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DOCTOR_SUCCESS:
      // cacheDoctors = payload;
      return payload;

    case FETCH_DOCTOR_FAILURE:
      return state;

    case DELETE_DOCTOR: {
      console.log('payload', payload);
      // const newState = state.filter((doctor) => doctor.id !== payload);
      return state;
    }

    default:
      return state;
  }
};

export default doctorReducer;
