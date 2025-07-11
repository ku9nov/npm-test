/**
 * Mathematical utility functions
 */
function add(a, b, options = {}) {
  // Add input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  
  // BREAKING CHANGE: The function now accepts an options parameter
  // Old usage: add(1, 2)
  // New usage: add(1, 2, { validate: true })
  
  const result = a + b;
  
  if (options.validate && result > Number.MAX_SAFE_INTEGER) {
    throw new Error('Result exceeds safe integer limit');
  }
  
  return result;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a * b;
}

/**
 * Calculate the power of a number
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The result of base raised to the power of exponent
 */
function power(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return Math.pow(base, exponent);
}

/**
 * String utility functions
 */
function formatGreeting(name) {
  // Optimized for better performance
  return `Hello, ${name.trim()}! Welcome to our application.`;
}

/**
 * Main application function
 */
function helloWorld() {
  console.log('Hello, world!');
}

// Export all functions
module.exports = {
  add,
  formatGreeting,
  helloWorld,
  multiply,
  power,
};

// Run main function if this file is executed directly
if (require.main === module) {
  helloWorld();
}
  
  