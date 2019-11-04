import { createReducer, createAction } from 'redux-starter-kit'

import { getUsers } from '../../api/addressBook.dataservice';
import { delay } from '../../utils/async.utils';
import { MAX_USERS_COUNT } from '../../config/app.config';

/**
 * Redux starter kit actions
 */
export const resetUsers = createAction('RESET_USERS');
export const selectUser = createAction('SELECT_USER');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');
export const setError = createAction('SET_ERROR');
export const setIsLoading = createAction('SET_IS_LOADING');
export const updateUsers = createAction('UPDATE_USERS');

export const fetchUsers = (delayMillis = 50) => async (dispatch, getState) => {
  try {
    const { currentPage, users } = getState().usersView;
    const { nationality } = getState().settings;
    if (users.length >= MAX_USERS_COUNT) { return }

    dispatch(setIsLoading(true));

    await delay(delayMillis);
    const fetchedUsers = await getUsers(nationality, currentPage);

    dispatch(updateUsers(fetchedUsers));
    dispatch(setCurrentPage(currentPage + 1));
  } catch (err) {
    dispatch(setError('Error occured during fetching users data.'));
  }
  dispatch(setIsLoading(false));
};

const initialState = {
  currentPage: 1,
  error: '',
  isLoading: false,
  selectedUserId: '',
  users: [],
  preFetchedUsers: []
};

const reducer = createReducer(initialState, {
  [resetUsers.type]: (state) => {
    state.users = [];
    state.currentPage = 1;
  },
  [selectUser.type]: (state, action) => { state.selectedUserId = action.payload },
  [setCurrentPage.type]: (state, action) => { state.currentPage = action.payload },
  [setError.type]: (state, action) => { state.error = action.payload },
  [setIsLoading.type]: (state, action) => { state.isLoading = action.payload },
  [updateUsers.type]: (state, action) => {
    state.users = [
      ...state.users,
      ...action.payload
    ]
  },
});

export default reducer;
