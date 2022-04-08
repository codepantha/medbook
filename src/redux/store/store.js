import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import doctorReducer from '../reducers/doctor';
import appointmentReducer from '../reducers/appointment';
import usersReducer from '../reducers/users';

const reducer = combineReducers({
  doctor: doctorReducer,
  appointments: appointmentReducer,
  users: usersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
