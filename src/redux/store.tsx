// src/redux/store.ts
import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/themeReducers';
import appStateReducer from './reducers/appStateReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  appState: appStateReducer,
});

const store = createStore(rootReducer);

export default store;
