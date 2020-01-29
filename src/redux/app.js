// action types
const SET_WORKING = 'app/SET_WORKING';

// actions
export const setWorking = (isWorking) => ({ type: SET_WORKING, isWorking });

// default state
const initialState = {
  working: false
};

// reducers
export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_WORKING:
      return {
        ...state,
        working: action.isWorking,
      };
    default:
      return state;
  }
}