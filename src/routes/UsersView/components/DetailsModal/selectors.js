/**
 * Get selected user selector
 * @param {Object} state - Application level state
 * @param {Object} state.usersView - Users view specific state slice
 * @param {String} state.usersView.selectedUserId - Selected user's identifier
 * @param {Array} state.usersView.users - List of users to check
 * @returns {Object} Selected user
 */
export const selectedUserSelector = ({ usersView: { selectedUserId, users } }) => {
  return users.find(user => user.login.uuid === selectedUserId)
};
