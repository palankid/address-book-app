import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { getDefaultMiddleware } from 'redux-starter-kit';
import configureStore from 'redux-mock-store';

import UsersView from './UsersView';
import { fetchUsers } from './reducer';

jest.mock('./reducer');

describe('UsersView', () => {
  const createMockedStore = (users) => {
    const state = {
      usersView: { users }
    };
    const mockedStore = configureStore(getDefaultMiddleware())(state);
    mockedStore.dispatch = jest.fn();
    return mockedStore;
  };
  const createComponent = (store) => mount(
    <Provider store={store}>
      <HashRouter>
        <UsersView />
      </HashRouter>
    </Provider>
  );

  it('should dispatch initial fetch users request if users list is empty', () => {
    const mockedStore = createMockedStore([]);
    createComponent(mockedStore);

    expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockedStore.dispatch).toHaveBeenCalledWith(fetchUsers());
  });

  it('should not dispatch initial fetch users request if users list is not empty', () => {
    const mockedStore = createMockedStore([{
      login: {
        uuid: 'john-smith-uuid',
        username: 'johnsmith'
      },
      cell: '12345678',
      location: {
        city: 'Los Angeles',
        state: 'California',
        street: {
          name: 'Elm',
          number: 1,
        },
      },
      name: {
        first: 'John',
        last: 'Smith',
      },
      phone: '87654321',
      picture: {
        large: 'path-to-image',
      },
    }]);
    createComponent(mockedStore);

    expect(mockedStore.dispatch).toHaveBeenCalledTimes(0);
  });
});
