import { selectedUserSelector } from './selectors';

describe('selectedUserSelector', () => {
  const user1 = {
    login: { uuid: 'user-1-uuid' },
  };
  const user2 = {
    login: { uuid: 'user-2-uuid' },
  };
  const createState = (selectedUserId) => ({
    usersView: {
      selectedUserId,
      users: [user1, user2],
    },
  });

  it('should find and return second user for the given uuid', () => {
    const state = createState('user-2-uuid');
    const expected = selectedUserSelector(state);
    expect(expected).toEqual(user2);
  });

  it('should return undefined if user with given uuid is not in store', () => {
    const state = createState('invalid-uuid');
    const expected = selectedUserSelector(state);
    expect(expected).toBeUndefined();
  });
});
