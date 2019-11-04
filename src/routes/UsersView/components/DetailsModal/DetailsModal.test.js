import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Icon } from 'semantic-ui-react';

import DetailsModal from './DetailsModal';

describe('ModalContent', () => {
  const createState = (selectedUserId) => ({
    details: {
      selectedUserId,
      users: [{
        login: {
          uuid: 'john-smith-uuid',
          username: 'johnsmith'
        },
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
      }]
    }
  });

  it('should assert that modal renders if an existing user is selected', () => {
    const state = createState('john-smith-uuid');
    const mockedStore = configureStore()(state);
    const wrapper = mount(
      <Provider store={mockedStore}>
        <DetailsModal />
      </Provider>
    );
    const detailsModal = wrapper.find(DetailsModal);

    expect(detailsModal.isEmptyRender()).toBeFalsy();
    detailsModal.find(Icon).simulate('click');
    const actions = mockedStore.getActions();
    expect(actions[0]).toEqual({ type: 'SELECT_USER', payload: '' })
  });

  it('should assert that modal does not render if selected user id is empty', () => {
    const state = createState('');
    const mockedStore = configureStore()(state);
    const wrapper = mount(
      <Provider store={mockedStore}>
        <DetailsModal />
      </Provider>
    );

    expect(wrapper.find(DetailsModal).isEmptyRender()).toBeTruthy();
  });
});
