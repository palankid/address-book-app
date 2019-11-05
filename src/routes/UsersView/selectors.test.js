import { filteredUsersSelector, unfilteredUsersLengthSelector } from './selectors';

describe('selectors', () => {
  const user1 = {
    login: {
      uuid: 'john-smith-uuid',
      username: 'johnsmith'
    },
    name: {
      first: 'John',
      last: 'Smith',
    },
  };
  const user2 = {
    login: {
      uuid: 'albert-johnny-uuid',
      username: 'albertjohnny'
    },
    name: {
      first: 'Albert',
      last: 'Johnny',
    },
  };
  const user3 = {
    login: {
      uuid: 'ace-ventura-uuid',
      username: 'aceventura'
    },
    name: {
      first: 'Ace',
      last: 'Ventura',
    },
  };
  const createState = (filter) => ({
    usersView: {
      users: [user1, user2, user3],
      filter
    }
  });

  describe('filteredUsersSelector', () => {
    it('should not filter any users if filter is empty', () => {
      const state = createState('');
      const expected = [user1, user2, user3];
      const filteredUsers = filteredUsersSelector(state);

      expect(filteredUsers).toEqual(expected);
    });

    it('should return 2 filtered persons', () => {
      const state = createState('joh');
      const expected = [user1, user2];
      const filteredUsers = filteredUsersSelector(state);

      expect(filteredUsers).toEqual(expected);
    });

    it('should return 1 filtered person', () => {
      const state = createState('ace');
      const expected = [user3];
      const filteredUsers = filteredUsersSelector(state);

      expect(filteredUsers).toEqual(expected);
    });
  });

  describe('unfilteredUsersLengthSelector', () => {
    it('should return the number of users in state', () => {
      const state = createState();
      const expected = unfilteredUsersLengthSelector(state);

      expect(expected).toBe(3);
    })
  });
});
