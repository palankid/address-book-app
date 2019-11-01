/**
 * Fixes user identifiers on the given result set
 * @param {Array} users - Users with broken identifiers
 * @returns {Array}
 */
export const fixUserIdentifiers = (users) => {
  return users.map((user) => ({
    ...user,
    id: {
      ...user.id,
      value: Math.random()
    }
  }));
};
