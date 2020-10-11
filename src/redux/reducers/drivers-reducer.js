import { driversConstant as c} from '../constants/drivers.constant';

// Initial State
const initialState = {
  data: [],
  isLoading: false
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    }
    case c.LOADING:{
      return {
        ...state,
        isLoading: true
      }
    }
    case c.ERROR:
      return {
        ...state,
        isLoading: false
      }
    default: {
      return state;
    }
  }
};

// Exports
export default driverReducer;