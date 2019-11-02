import { combineReducers, configureStore } from 'redux-starter-kit'

import detailsReducer from '../routes/Details/reducer'

const rootReducer = combineReducers({
  details: detailsReducer
});
const store = configureStore({
  reducer: rootReducer
});

export default store
