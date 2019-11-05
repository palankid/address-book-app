import React from 'react';

/**
 * Fallback component to display when a component for a specific
 * route is not loaded and therefore can't be displayed yet
 * @returns {Object<Node>} React node
 */
const LoadingModule = () => {
  return (
    <div className="loading-module">
      <span className="loading-module__text">
        Loading module...
      </span>
    </div>
  );
};

export default LoadingModule;
