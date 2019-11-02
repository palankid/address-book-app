import { combineReducers, configureStore } from 'redux-starter-kit';

import detailsReducer from '../routes/Details/reducer';
import settingsReducer from '../routes/Settings/reducer';

const rootReducer = combineReducers({
  details: detailsReducer,
  settings: settingsReducer,
});
const store = configureStore({
  reducer: rootReducer
});

export default store;
