import React from 'react';
import { shallow } from 'enzyme';

import LoadingModule from './LoadingModule';

describe('LoadingModule', () => {
  it('should test that component is not changed unintentionally', () => {
    const wrapper = shallow(<LoadingModule />);

    expect(wrapper).toMatchSnapshot();
  });
});
