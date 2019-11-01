import { createReducer, createAction } from 'redux-starter-kit'
import axios from 'axios';

import { fixUserIdentifiers } from './reducer.service';

export const setError = createAction('SET_ERROR');
export const setIsLoading = createAction('SET_IS_LOADING');
export const setUsers = createAction('SET_USERS');

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const result = await axios.get('https://randomuser.me/api/?results=100&seed=addressbook&name=chadbowman');
    const users = fixUserIdentifiers(result.data.results);
    dispatch(setUsers(users));
  } catch (err) {
    dispatch(setError('Error occured during fetching users data.'))
  }
  dispatch(setIsLoading(false));
};

const initialState = {
  error: '',
  isLoading: false,
  users: [],
};

const reducer = createReducer(initialState, {
  [setError.type]: (state, action) => { state.error = action.payload },
  [setIsLoading.type]: (state, action) => { state.isLoading = action.payload },
  [setUsers.type]: (state, action) => {
    state.users = [ ...state.users, ...action.payload ]
  },
});

export default reducer;
