// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import app from './app';

const rootReducer = combineReducers({
  app,
  counter,
  router
});

export default rootReducer;
