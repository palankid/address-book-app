/**
 * Settings related actions, reducer
 * @module routes/Settings/reducer
 */

import { createReducer, createAction } from 'redux-starter-kit'

import { nationalityKeys } from '../config/nationalities.config';

/**
 * Redux starter kit actions
 */
export const selectNationality = createAction('SELECT_NATIONALITY');

const initialState = {
  nationality: nationalityKeys.gb,
};

/**
 * Settings reducer
 */
const reducer = createReducer(initialState, {
  [selectNationality.type]: (state, action) => { state.nationality = action.payload },
});

export default reducer;
