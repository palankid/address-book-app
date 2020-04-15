import React from 'react'
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getDefaultMiddleware } from 'redux-starter-kit';
import { Provider } from 'react-redux';
import { Icon, Input } from 'semantic-ui-react';

import StickyHeader from './StickyHeader';
import { changeFilter } from '../../store/reducer';

jest.mock('../../store/reducer');

describe('StickyHeader', () => {
  const state = {
    usersView: {
      filter: 'test'
    }
  };
  const mockedStore = configureStore(getDefaultMiddleware())(state);
  mockedStore.dispatch = jest.fn();
  const mockHistory = createMemoryHistory();
  mockHistory.push = jest.fn();
  const wrapper = mount(
    <Provider store={mockedStore}>
      <Router history={mockHistory}>
        <StickyHeader />
      </Router>
    </Provider>
  );

  it('should change route when setting icon is clicked', () => {
    wrapper
      .find(Icon)
      .find('[name="setting"]')
      .simulate('click');

    expect(mockHistory.push).toBeCalledWith('/settings')
  });

  it('should test that dispatch and change filter actions were called', () => {
    wrapper
      .find('input')
      .simulate('change', '', { value: ['test'] });

    expect(mockedStore.dispatch).toBeCalledTimes(1);
    expect(mockedStore.dispatch).toHaveBeenCalledWith(changeFilter());
  });

  it('should test that initial filter value is passed to input', () => {
    const inputText = wrapper.find(Input).props().value;

    expect(inputText).toBe('test');
  });
});
