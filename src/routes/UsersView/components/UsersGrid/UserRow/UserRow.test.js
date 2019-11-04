import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Button, Table } from 'semantic-ui-react';

import UserRow from './UserRow';

describe('UserRow', () => {
  const user = {
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
  };
  const mockedStore = configureStore()({});
  const wrapper = mount(
    <Provider store={mockedStore}>
      <Table>
        <Table.Body>
          <UserRow
            user={user}
          />
        </Table.Body>
      </Table>
    </Provider>
  );
  const tableCells = wrapper.find(Table.Cell);

  it('should test profile thumbnail\'s src property', () => {
    const imgSrc = wrapper.find('img').props().src;
    expect(imgSrc).toBe('path-to-image');
  });

  it('should test first name\'s cell', () => {
    const expected = tableCells.get(1).props.children;
    expect(expected).toBe('John');
  });

  it('should test last name\'s cell', () => {
    const expected = tableCells.get(2).props.children;
    expect(expected).toBe('Smith');
  });

  it('should test user name\'s cell', () => {
    const expected = tableCells.get(3).props.children;
    expect(expected).toBe('johnsmith');
  });

  it('should test email\'s cell', () => {
    const expected = tableCells.get(4).props.children;
    expect(expected).toBe('john.smith@gmail.com');
  });

  it('should call SELECT_USER action', () => {
    wrapper.find(Button).simulate('click');
    const actions = mockedStore.getActions();
    expect(actions[0]).toEqual({
      type: 'SELECT_USER',
      payload: 'john-smith-uuid'
    });
  })
});
