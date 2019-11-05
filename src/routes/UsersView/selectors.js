/**
 * Get filtered users selector
 * @param {Object} state - Application level state
 * @param {Object} state.usersView - Users view specific state slice
 * @param {String} state.usersView.filter - Filter text
 * @param {Array} state.usersView.users - List of users to check
 * @returns {Array} Filtered users
 */
export const filteredUsersSelector = ({ usersView: { filter, users } }) => {
  if (!filter) { return users }

  return users.filter((user) => {
    const isFirstNameMatch = user.name.first.toLowerCase().includes(filter.toLowerCase());
    const isLastNameMatch = user.name.last.toLowerCase().includes(filter.toLowerCase());

    return isFirstNameMatch || isLastNameMatch
  });
};

/**
 * Get length of users list selector
 * @param {Object} state - Application level state
 * @param {Object} state.usersView - Users view specific state slice
 * @param {Array} state.usersView.users - List of users to check
 * @returns {Number}
 */
export const unfilteredUsersLengthSelector = ({ usersView: { users } }) => {
  return users.length;
};
