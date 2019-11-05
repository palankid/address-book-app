import React from 'react';
import { shallow } from 'enzyme';

import EndOfUsersMessage from './EndOfUsersMessage';

describe('EndOfUsersMessage', () => {
  it('should not display message if max number of users is not reached', () => {
    const wrapper = shallow(
      <EndOfUsersMessage
        visible={false}
      />
    );

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('should display message if max number of users is reached', () => {
    const wrapper = shallow(
      <EndOfUsersMessage
        visible={true}
      />
    );

    expect(wrapper.isEmptyRender()).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });
});
