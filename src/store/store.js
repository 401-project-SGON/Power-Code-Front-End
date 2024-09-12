import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promis from 'redux-promise-middleware';

import reducer from './reducers.js';

const middleware = applyMiddleware(promis,thunk,logger);

let reducers = combineReducers({ reducer});
const store = () => {
  return createStore(reducers, middleware );
};

export default store();
