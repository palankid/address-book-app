import React from 'react';

import { Icon } from 'semantic-ui-react';

/**
 * Fallback component to display when a component for a specific
 * route is not loaded and therefore can't be displayed yet
 * @returns {Object<Node>} React node
 */
const LoadingModule = () => {
  return (
    <div className="loading-module">
      <Icon
        loading
        name="spinner"
        size="huge"
      />
      <span className="loading-module__text">
        Loading module
      </span>
    </div>
  );
};

export default LoadingModule;
