import React from 'react';
import { shallow } from 'enzyme';

import { MAX_USERS_COUNT } from '../../../../config/app.config';

import EndOfUsersMessage from './EndOfUsersMessage';

describe('EndOfUsersMessage', () => {
  const createMockedUsers = (count) => {
    return new Array(count).map(() => ({
      prop: true
    }));
  };

  it('should not display message if max number of users is not reached', () => {
    const users = createMockedUsers(2);
    const wrapper = shallow(
      <EndOfUsersMessage
        users={users}
      />
    );

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('should display message if max number of users is reached', () => {
    const users = createMockedUsers(MAX_USERS_COUNT);
    const wrapper = shallow(
      <EndOfUsersMessage
        users={users}
      />
    );

    expect(wrapper.isEmptyRender()).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });
});
