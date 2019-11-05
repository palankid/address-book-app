import React from 'react';
import { shallow } from 'enzyme';

import LoadingMessage from './LoadingMessage';

describe('LoadingMessage', () => {
  it('should test that component is rendered and not changed unintentionally', () => {
    const wrapper = shallow(
      <LoadingMessage
        message="Loading..."
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should test that component is not rendered', () => {
    const wrapper = shallow(
      <LoadingMessage
        message="Loading..."
        visible={false}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
