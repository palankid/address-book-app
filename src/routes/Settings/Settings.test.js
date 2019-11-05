import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from 'redux-starter-kit';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Dropdown, Icon } from 'semantic-ui-react';

import Settings from './Settings';
import { fetchUsers, resetUsers } from '../UsersView/reducer';
import { selectNationality } from "./reducer";

jest.mock('../UsersView/reducer');
jest.mock('./reducer');

describe('Settings', () => {
  const state = {
    settings: {
      nationality: 'gb'
    }
  };
  const mockedStore = configureStore(getDefaultMiddleware())(state);
  mockedStore.dispatch = jest.fn();
  const mockHistory = createMemoryHistory();
  mockHistory.push = jest.fn();
  const wrapper = mount(
    <Provider store={mockedStore}>
      <Router history={mockHistory}>
        <Settings />
      </Router>
    </Provider>
  );

  it('should change route when back icon button is clicked', () => {
    wrapper
      .find(Icon)
      .find('[name="arrow left"]')
      .simulate('click');

    expect(mockHistory.push).toBeCalledWith('/')
  });

  it('should test that dispatch was called 3 times with appropriate actions', () => {
    wrapper
      .find(Dropdown)
      .simulate('change', '', { value: ['val'] });

    expect(mockedStore.dispatch).toBeCalledTimes(3);
    expect(mockedStore.dispatch).toHaveBeenCalledWith(selectNationality());
    expect(mockedStore.dispatch).toHaveBeenCalledWith(resetUsers());
    expect(mockedStore.dispatch).toHaveBeenCalledWith(fetchUsers());
  })
});
