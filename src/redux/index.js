import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composedEnhancers = composeFunc(applyMiddleware(...middleware), ...enhancers);

const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, initialState, composedEnhancers);
const persistor = persistStore(store);

export const getStore = () => ({ store, persistor });
