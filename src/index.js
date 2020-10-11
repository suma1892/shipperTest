import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
ReactDOM.render(
  <BrowserRouter>
    
    <Provider store={store}>
      <PersistGate 
        loading={null}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();