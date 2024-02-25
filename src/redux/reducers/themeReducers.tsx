// src/redux/reducers/themeReducer.ts
import { TOGGLE_THEME } from '../actions/actionTypes';

const initialState = {
  theme: 'light',
};

const themeReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default themeReducer;
