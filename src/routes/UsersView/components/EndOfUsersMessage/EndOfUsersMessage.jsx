import React from 'react';
import { number } from 'prop-types';

import { MAX_USERS_COUNT } from '../../../../config/app.config';

/**
 * Display a message if max number of users are rendered on the screen
 * @param {Object} props - React PropTypes
 * @param {Array} props.usersLength - Number of users
 * @returns {Object<Node>} React node
 */
const EndOfUsersMessage = ({ usersLength }) => {
  const isMessageHidden = usersLength < MAX_USERS_COUNT;
  if (isMessageHidden) { return null }

  return (
    <div className="end-of-users-message">
      <span className="end-of-users-message__text">
        End of users catalog
      </span>
    </div>
  );
};

EndOfUsersMessage.propTypes = {
  usersLength: number
};

export default EndOfUsersMessage;
