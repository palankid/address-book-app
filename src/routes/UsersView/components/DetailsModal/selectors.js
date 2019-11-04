export const selectedUserSelector = ({ usersView: { selectedUserId, users } }) => {
  return users.find(user => user.login.uuid === selectedUserId)
};
