/**
 * Helper function to delay the code execution in an async function
 * @param {Number} millis - Delay in milliseconds
 * @returns {Promise}
 */
export const delay = (millis) => {
  return new Promise(resolve => setTimeout(resolve, millis))
};
