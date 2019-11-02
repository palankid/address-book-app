import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Icon, Modal } from 'semantic-ui-react';

import { selectUser } from '../../reducer';

import ModalContent from './ModalContent';

const DetailsModal = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    ({ details: { selectedUserId, users } }) => {
      return users.find(user => user.login.uuid === selectedUserId)
    }
  );

  const shouldShowModal = Boolean(selectedUser);
  if (!shouldShowModal) { return null }

  const onCloseModal = () => {
    dispatch(selectUser(''));
  };

  return (
    <Modal
      open
      onClose={onCloseModal}
      size='tiny'
    >
      <Modal.Header className="details-modal__header">
        <span className="details-modal__title">
          Details
        </span>
        <Icon
          link
          name="close"
          size="large"
          onClick={onCloseModal}
        />
      </Modal.Header>
      <Modal.Content>
        <ModalContent
          user={selectedUser}
        />
      </Modal.Content>
    </Modal>
  );
};

export default DetailsModal;
