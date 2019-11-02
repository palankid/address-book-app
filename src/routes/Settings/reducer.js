import { createReducer, createAction } from 'redux-starter-kit'

import { nationalityKeys } from './nationalities.config';

export const selectNationality = createAction('SELECT_NATIONALITY');

const initialState = { nationality: nationalityKeys.gb };

const reducer = createReducer(initialState, {
  [selectNationality.type]: (state, action) => { state.nationality = action.payload },
});

export default reducer;
