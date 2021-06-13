import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { history, getStore } from './redux';

import Root from './root';
import './assets/css/style.scss';

const { store, persistor } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
