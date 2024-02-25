// src/redux/reducers/appStateReducer.ts
import { SET_APP_STATE } from '../actions/actionTypes';

const initialState = {
  isLoaded: false,
};

const appStateReducer = (state = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_APP_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default appStateReducer;
