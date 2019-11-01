import React from 'react'
import { shallow } from 'enzyme';

import StickyHeader from "./StickyHeader";
import {Input} from "semantic-ui-react";

describe('Details', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StickyHeader />);
  });

  it('should test', () => {
    wrapper.find(Input).prop('onChange')({}, { value: 'Hello world!!' });
    expect('1').toEqual('1')
  });
});
