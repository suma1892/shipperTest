// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

// Imports: Redux
import rootReducer from '../redux/reducers/index';
// import {immutableTransform, autoMergeLevel2Immutable} from 'redux-persist-transform-immutable'
import storage from 'redux-persist/lib/storage';

// Middleware: Redux Persist Config
const persistConfig = { key: 'root', storage, };

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
    thunk
  ),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};