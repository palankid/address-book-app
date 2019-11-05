import React from 'react';
import { shallow } from 'enzyme';

import { MAX_USERS_COUNT } from '../../../../config/app.config';

import EndOfUsersMessage from './EndOfUsersMessage';

describe('EndOfUsersMessage', () => {
  it('should not display message if max number of users is not reached', () => {
    const wrapper = shallow(
      <EndOfUsersMessage
        usersLength={2}
      />
    );

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('should display message if max number of users is reached', () => {
    const wrapper = shallow(
      <EndOfUsersMessage
        usersLength={MAX_USERS_COUNT + 1}
      />
    );

    expect(wrapper.isEmptyRender()).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });
});
