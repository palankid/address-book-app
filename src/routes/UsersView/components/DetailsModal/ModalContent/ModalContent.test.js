import React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'semantic-ui-react';

import ModalContent from './ModalContent';

describe('ModalContent', () => {
  const user = {
    cell: '12345678',
    location: {
      city: 'Los Angeles',
      state: 'California',
      street: {
        name: 'Elm',
        number: 1,
      },
    },
    name: {
      first: 'John',
      last: 'Smith',
    },
    phone: '87654321',
    picture: {
      large: 'path-to-image',
    },
  };
  const wrapper = shallow(
    <ModalContent
      user={user}
    />
  );

  it('should test profile picture\'s src property', () => {
    const imgSrc = wrapper.find(Image).props().src;
    expect(imgSrc).toBe('path-to-image');
  });

  describe('Details table', () => {
    const tableCells = wrapper.find('td').not('.modal-content__row-title');

    it('should test Name cell', () => {
      const expected = tableCells.at(0).text();
      expect(expected).toBe('John Smith');
    });

    it('should test Street cell', () => {
      const expected = tableCells.at(1).text();
      expect(expected).toBe('Elm str. 1');
    });

    it('should test City cell', () => {
      const expected = tableCells.at(2).text();
      expect(expected).toBe('Los Angeles');
    });

    it('should test State cell', () => {
      const expected = tableCells.at(3).text();
      expect(expected).toBe('California');
    });

    it('should test Phone cell', () => {
      const expected = tableCells.at(4).text();
      expect(expected).toBe('87654321');
    });

    it('should test Cell phone cell', () => {
      const expected = tableCells.at(5).text();
      expect(expected).toBe('12345678');
    });
  })
});
