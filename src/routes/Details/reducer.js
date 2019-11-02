import { createReducer, createAction } from 'redux-starter-kit'

import { getUsers } from '../../api/addressBook.dataservice';

export const selectUser = createAction('SELECT_USER');
export const setError = createAction('SET_ERROR');
export const setIsLoading = createAction('SET_IS_LOADING');
export const updateUsers = createAction('UPDATE_USERS');

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const users = await getUsers();
    dispatch(updateUsers(users));
  } catch (err) {
    dispatch(setError('Error occured during fetching users data.'))
  }
  dispatch(setIsLoading(false));
};

const initialState = {
  error: '',
  isLoading: false,
  selectedUserId: '',
  users: [],
};

const reducer = createReducer(initialState, {
  [selectUser.type]: (state, action) => { state.selectedUserId = action.payload },
  [setError.type]: (state, action) => { state.error = action.payload },
  [setIsLoading.type]: (state, action) => { state.isLoading = action.payload },
  [updateUsers.type]: (state, action) => {
    state.users = [ ...state.users, ...action.payload ]
  },
});

export default reducer;
