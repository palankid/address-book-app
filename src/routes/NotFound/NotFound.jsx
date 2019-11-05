import React from 'react';

/**
 * Fallback component to display when user attempts to navigate to an unspecified route
 * @returns {Object<Node>} React node
 */
const NotFound = () => {
  return (
    <div className="not-found">
      <span className="not-found__content">
        Error 404: Page not found
      </span>
    </div>
  );
};

export default NotFound;
