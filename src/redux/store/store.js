import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import doctorReducer from '../reducers/doctor';

const reducer = combineReducers({
  doctor: doctorReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
