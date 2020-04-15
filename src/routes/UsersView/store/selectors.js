/**
 * Get filtered users
 * @param {Object} state - Application level state
 * @param {Object} state.usersView - Users view specific state slice
 * @param {String} state.usersView.filter - Filter text
 * @param {Array} state.usersView.users - List of users to check
 * @returns {Array} Filtered users
 */

import { MAX_USERS_COUNT } from '../../../config/app.config';

export const filteredUsersSelector = ({ usersView: { filter, users } }) => {
  if (!filter) { return users }

  return users.filter((user) => {
    const isFirstNameMatch = user.name.first.toLowerCase().includes(filter.toLowerCase());
    const isLastNameMatch = user.name.last.toLowerCase().includes(filter.toLowerCase());

    return isFirstNameMatch || isLastNameMatch
  });
};

/**
 * Check if maximum allowed users are already loaded
 * @param {Object} state - Application level state
 * @param {Object} state.usersView - Users view specific state slice
 * @param {Array} state.usersView.users - List of users to check
 * @returns {Boolean}
 */
export const isMaxUsersReachedSelector = ({ usersView: { users } }) => {
  return users.length >= MAX_USERS_COUNT;
};

/**
 * Get length of users list
 * @param {Object} state - Application level state
 * @param {Object} state.usersView - Users view specific state slice
 * @param {Array} state.usersView.users - List of users to check
 * @returns {Boolean}
 */
export const isUsersPopulatedSelector = ({ usersView: { users } }) => {
  return Boolean(users.length)
};
