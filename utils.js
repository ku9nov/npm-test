/**
 * String utility functions
 */

/**
 * Capitalize the first letter of a string
 * @param {string} str - The input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverse a string
 * @param {string} str - The input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Count words in a string
 * @param {string} str - The input string
 * @returns {number} Number of words
 */
function wordCount(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  
  // Optimized for better performance - use single regex
  const trimmed = str.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}

module.exports = {
  capitalize,
  reverse,
  wordCount,
}; 