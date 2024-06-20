/**
 * Generates a unique ID of a given length
 * @param {number} length - The length of the ID to generate
 * @returns {string} - The generated ID
 */
const idGenerator = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};
