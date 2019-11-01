import { combineReducers } from 'redux-starter-kit'

import detailsReducer from '../features/details/reducer'

const rootReducer = combineReducers({
  details: detailsReducer
});

export default rootReducer
