import { combineReducers, configureStore } from 'redux-starter-kit';

import usersReducer from '../routes/UsersView/reducer';
import settingsReducer from '../routes/Settings/reducer';

const rootReducer = combineReducers({
  usersView: usersReducer,
  settings: settingsReducer,
});
const store = configureStore({
  reducer: rootReducer
});

export default store;
