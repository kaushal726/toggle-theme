// src/redux/actions/appStateActions.ts
import { SET_APP_STATE } from './actionTypes';

export const setAppState = (state: { theme: string; isLoaded: boolean }) => ({
  type: SET_APP_STATE,
  payload: state,
});
