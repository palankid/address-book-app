/**
 * Redux store configuration
 * @module config/store
 */

import { combineReducers, configureStore } from 'redux-starter-kit';

import { reducer as usersReducer } from '../routes/UsersView';
import { reducer as settingsReducer } from '../routes/Settings';

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
