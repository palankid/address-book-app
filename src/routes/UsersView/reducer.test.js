import { fetchUsers } from './reducer';

import addressBookService from '../../api/addressBook.dataservice';

jest.mock('../../api/addressBook.dataservice');

describe('Users view reducer', () => {
  const createState = (users, cachedUsers, shouldLiftState) => () => ({
    usersView: {
      currentPage: 1,
      shouldLiftState: shouldLiftState,
      users,
      cachedUsers,
    },
    settings: {
      nationality: 'gb'
    },
  });

  describe('fetchUsers', () => {
    it('should dispatch all actions and should call getUsers', async () => {
      const dispatch = jest.fn();

      await fetchUsers(dispatch, createState([], [], true));

      expect(dispatch).toHaveBeenCalledTimes(5);
      expect(addressBookService.fetchUsers).toHaveBeenCalledWith('gb', 1);
    });

    it('should dispatch 4 actions and should call getUsers if shouldLiftState is false', async () => {
      const dispatch = jest.fn();

      await fetchUsers(dispatch, createState([], [], false));

      expect(dispatch).toHaveBeenCalledTimes(4);
      expect(addressBookService.fetchUsers).toHaveBeenCalledWith('gb', 1);
    });
  });
});
