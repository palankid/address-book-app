import React from 'react';
import { bool, string } from 'prop-types';

import { Icon } from 'semantic-ui-react';

/**
 * Component to display a loading spinner and a message
 * @param {Object} props - React PropTypes
 * @param {String} message - Message to display
 * @param {String} [visible=true] - Prop if component should be visible
 * @returns {Object<Node>} React node
 */
const LoadingMessage = ({ message, visible = true }) => {
  if (!visible) { return null }

  return (
    <div className="loading-message">
      <Icon
        loading
        name="spinner"
        size="huge"
      />
      <span className="loading-message__text">
        { message }
      </span>
    </div>
  );
};

LoadingMessage.propTypes = {
  message: string.isRequired,
  visible: bool,
};

export default LoadingMessage;
