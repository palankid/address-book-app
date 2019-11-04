import React from 'react';
import { array } from 'prop-types';

import { MAX_USERS_COUNT } from '../../../../config/app.config';

const EndOfUsersMessage = ({ users }) => {
  const isMessageHidden = users.length < MAX_USERS_COUNT;
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
  users: array
};

export default EndOfUsersMessage;
