import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './reducers';
import socketMiddleware from './socketMiddleware';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];
if (process.env.ENABLE_SOCKETS === 'true') {
  middleware.push(socketMiddleware);
}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composedEnhancers = composeFunc(applyMiddleware(...middleware), ...enhancers);

const store = createStore(createRootReducer(history), initialState, composedEnhancers);

export default store;
