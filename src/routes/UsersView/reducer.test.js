import { fetchUsers } from './reducer';

import addressBookService from '../../api/addressBook.dataservice';

jest.mock('../../api/addressBook.dataservice');

describe('Users view reducer', () => {
  const createState = (users, cachedUsers, shouldLiftState, isLoading) => () => ({
    usersView: {
      currentPage: 1,
      isLoading,
      shouldLiftState: shouldLiftState,
      users,
      cachedUsers,
    },
    settings: {
      nationality: 'gb'
    },
  });

  beforeEach(() => {
    addressBookService.fetchUsers.mockClear();
  });

  describe('fetchUsers', () => {
    it('should dispatch all actions and should call getUsers', async () => {
      const dispatch = jest.fn();

      await fetchUsers(dispatch, createState([], [], true, false));

      expect(dispatch).toHaveBeenCalledTimes(6);
      expect(addressBookService.fetchUsers).toHaveBeenCalledWith('gb', 1);
    });

    it('should dispatch 5 actions and should call getUsers if shouldLiftState is false', async () => {
      const dispatch = jest.fn();

      await fetchUsers(dispatch, createState([], [], false, false));

      expect(dispatch).toHaveBeenCalledTimes(5);
      expect(addressBookService.fetchUsers).toHaveBeenCalledWith('gb', 1);
    });

    it('should not dispatch any actions if another fetch is under way', async () => {
      const dispatch = jest.fn();

      await fetchUsers(dispatch, createState([], [], false, true));

      expect(dispatch).toHaveBeenCalledTimes(0);
      expect(addressBookService.fetchUsers).toHaveBeenCalledTimes(0);
    });
  });
});
