/**
 * Users view related actions, reducer
 * @module routes/UsersView/reducer
 */

import { createReducer, createAction } from 'redux-starter-kit'

import addressBookService from '../../api/addressBook.dataservice';
import { wait } from '../../utils/async.utils';
import { MAX_USERS_COUNT } from '../../config/app.config';

/**
 * Redux starter kit actions
 */
export const changeFilter = createAction('CHANGE_FILTER');
export const liftCachedUsers = createAction('LIFT_CACHED_USERS');
export const resetUsers = createAction('RESET_USERS');
export const selectUser = createAction('SELECT_USER');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');
export const setError = createAction('SET_ERROR');
export const setShouldLiftState = createAction('SET_SHOULD_LIFT_STATE');
export const setIsLoading = createAction('SET_IS_LOADING');
export const updateCache = createAction('UPDATE_CACHE');

/**
 * Fetch users list
 * @async
 * @param {Function} dispatch - Dispatches an action
 * @param {Function} getState - Retrieves application level state
 */
export const fetchUsers = async (dispatch, getState) => {
  dispatch(setIsLoading(true));
  const { usersView: { currentPage }, settings: { nationality } } = getState();

  // Simulate high DB load before calling data service
  await wait(1000);
  const users = await addressBookService.fetchUsers(nationality, currentPage);
  dispatch(updateCache(users));

  const { usersView: { shouldLiftState } } = getState();
  // Lift cache immediately if user scrolled down to the bottom of the page or if users list is empty initially
  shouldLiftState && dispatch(liftCachedUsers());

  dispatch(setCurrentPage(currentPage + 1));
  dispatch(setIsLoading(false));
};

/**
 * @async
 * @typedef {Function} getUsers
 * @param {Function} dispatch - Dispatches an action
 * @param {Function} getState - Retrieves application level state
 */
/**
 * Get users list
 * @returns {getUsers}
 */
export const getUsers = () => async (dispatch, getState) => {
  const { cachedUsers, isLoading, users } = getState().usersView;
  const allUsersCount = users.length + cachedUsers.length;

  // Lift cached users - if there are any - to users list in order to show it immediately
  dispatch(liftCachedUsers());
  // If max number of users reached or if previous request is under way, do nothing
  if (allUsersCount >= MAX_USERS_COUNT || isLoading) { return }

  try {
    // Initial request, result goes straight to user list that results in immediate rendering
    !users.length && await fetchUsers(dispatch, getState);
    await fetchUsers(dispatch, getState);
  } catch (err) {
    dispatch(setError('Error occured during fetching users data.'));
  }
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
};

const initialState = {
  currentPage: 1,
  error: '',
  filter: '',
  shouldLiftState: true,
  isLoading: false,
  selectedUserId: '',
  users: [],
  cachedUsers: []
};

/**
 * Users view reducer
 */
const reducer = createReducer(initialState, {
  [changeFilter.type]: (state, { payload }) => {
    state.filter = payload
  },

  [liftCachedUsers.type]: (state) => {
    state.users = [ ...state.users, ...state.cachedUsers ];
    state.cachedUsers = [];
  },

  [resetUsers.type]: (state) => {
    state.users = [];
    state.currentPage = 1;
  },

  [selectUser.type]: (state, { payload }) => {
    state.selectedUserId = payload;
  },

  [setCurrentPage.type]: (state, { payload }) => {
    state.currentPage = payload;
  },

  [setError.type]: (state, { payload }) => {
    state.error = payload;
  },

  [setIsLoading.type]: (state, { payload }) => {
    state.isLoading = payload;
  },

  [setShouldLiftState.type]: (state, { payload }) => {
    state.shouldLiftState = payload;
  },

  [updateCache.type]: (state, { payload }) => {
    state.cachedUsers = [ ...state.cachedUsers, ...payload ]
  },
});

export default reducer;
