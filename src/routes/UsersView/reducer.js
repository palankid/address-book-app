/**
 * Users view related actions, reducer
 * @module routes/UsersView/reducer
 */

import { createReducer, createAction } from 'redux-starter-kit'

import { getUsers } from '../../api/addressBook.dataservice';
import { delay } from '../../utils/async.utils';
import { MAX_USERS_COUNT } from '../../config/app.config';

/**
 * Redux starter kit actions
 */
export const changeFilter = createAction('CHANGE_FILTER');
export const resetUsers = createAction('RESET_USERS');
export const selectUser = createAction('SELECT_USER');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');
export const setError = createAction('SET_ERROR');
export const setIsLoading = createAction('SET_IS_LOADING');
export const updateUsers = createAction('UPDATE_USERS');

/**
 * @typedef {Function} fetchUsers
 * @param {Function} dispatch - Dispatches an action
 * @param {Function} getState - Retrieves application level state
 */
/**
 * Fetch users thunk action to manage retrieving users
 * @param {Number} delayMillis - Simulate that the database behind the endpoint is very busy
 * @returns {fetchUsers}
 */
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

/**
 * @typedef {Function} resetUsersView
 * @param {Function} dispatch - Dispatches an action
 */
/**
 * Reset users view
 * @returns {resetUsersView}
 */
export const resetUsersView = () => (dispatch) => {
  dispatch(resetUsers());
  dispatch(changeFilter(''));
  dispatch(fetchUsers());
};

const initialState = {
  currentPage: 1,
  error: '',
  filter: '',
  isLoading: false,
  selectedUserId: '',
  users: [],
  preFetchedUsers: []
};

/**
 * Users view reducer
 */
const reducer = createReducer(initialState, {
  [changeFilter.type]: (state, { payload }) => { state.filter = payload },
  [resetUsers.type]: (state) => {
    state.users = [];
    state.currentPage = 1;
  },
  [selectUser.type]: (state, { payload }) => { state.selectedUserId = payload },
  [setCurrentPage.type]: (state, { payload }) => { state.currentPage = payload },
  [setError.type]: (state, { payload }) => { state.error = payload },
  [setIsLoading.type]: (state, { payload }) => { state.isLoading = payload },
  [updateUsers.type]: (state, { payload }) => {
    state.users = [
      ...state.users,
      ...payload
    ]
  },
});

export default reducer;
