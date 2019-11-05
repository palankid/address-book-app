/**
 * Helper function to delay the code execution in an async function
 * @async
 * @param {Number} millis - Delay in milliseconds
 * @returns {Promise}
 */
export const wait = (millis) => {
  return new Promise(resolve => setTimeout(resolve, millis))
};
