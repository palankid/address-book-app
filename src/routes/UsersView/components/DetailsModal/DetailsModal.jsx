import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Modal } from 'semantic-ui-react';

import { selectUser } from '../../store/reducer';

import ModalContent from './ModalContent';
import { selectedUserSelector } from './selectors';

/**
 * Component for showing user's details in a modal
 * @returns {Object<Node>} React node
 */
const DetailsModal = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(selectedUserSelector);

  const shouldShowModal = Boolean(selectedUser);
  if (!shouldShowModal) { return null }

  /**
   * Handle close modal events
   */
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
