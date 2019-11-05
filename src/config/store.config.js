/**
 * Redux store configuration
 * @module config/store
 */

import { combineReducers, configureStore } from 'redux-starter-kit';

import usersReducer from '../routes/UsersView/reducer';
import settingsReducer from '../routes/Settings/reducer';

/** Combine application's state slices into one root reducer */
const rootReducer = combineReducers({
  usersView: usersReducer,
  settings: settingsReducer,
});

/** Creates a Redux store that holds the application's state tree */
const store = configureStore({
  reducer: rootReducer
});

export default store;
