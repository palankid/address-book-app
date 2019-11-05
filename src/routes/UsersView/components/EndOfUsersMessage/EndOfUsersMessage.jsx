import React from 'react';
import { bool } from 'prop-types';

/**
 * Display a message if max number of users are rendered on the screen
 * @param {Object} props - React PropTypes
 * @param {Array} props.visible - Prop if message should be visible
 * @returns {Object<Node>} React node
 */
const EndOfUsersMessage = ({ visible }) => {
  if (!visible) { return null }

  return (
    <div className="end-of-users-message">
      <span className="end-of-users-message__text">
        End of users catalog
      </span>
    </div>
  );
};

EndOfUsersMessage.propTypes = {
  visible: bool.isRequired
};

export default EndOfUsersMessage;
