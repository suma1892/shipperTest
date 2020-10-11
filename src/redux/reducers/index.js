// Imports: Dependencies
import { combineReducers } from 'redux';
import driverReducer from './drivers-reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  drivers: driverReducer,
});

// Exports
export default rootReducer;