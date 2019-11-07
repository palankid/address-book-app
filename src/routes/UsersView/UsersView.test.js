import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { getDefaultMiddleware } from 'redux-starter-kit';
import configureStore from 'redux-mock-store';

import UsersView from './UsersView';
import { getUsers } from './reducer';

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

  it('should dispatch 2 actions initially', () => {
    const mockedStore = createMockedStore([]);
    createComponent(mockedStore);

    expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockedStore.dispatch).toHaveBeenCalledWith(getUsers());
  });

  it('shouldn\'t dispatch action if user list is populated (only relevant when user switches route)', () => {
    const mockedStore = createMockedStore([{
      email: 'john.smith@gmail.com',
      login: {
        uuid: 'john-smith-uuid',
        username: 'johnsmith'
      },
      name: {
        first: 'John',
        last: 'Smith',
      },
      picture: {
        thumbnail: 'path-to-image',
      },
    }]);
    createComponent(mockedStore);

    expect(mockedStore.dispatch).toHaveBeenCalledTimes(0);
  });

});
