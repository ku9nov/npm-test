/**
 * Mathematical utility functions
 */

/**
 * Validate that all arguments are numbers
 * @param {...number} args - Arguments to validate
 * @throws {Error} If any argument is not a number
 */
function validateNumbers(...args) {
  for (const arg of args) {
    if (typeof arg !== 'number') {
      throw new Error('All arguments must be numbers');
    }
  }
}

function add(a, b, options = {}) {
  validateNumbers(a, b);
  
  // BREAKING CHANGE: The function now accepts an options parameter
  // Old usage: add(1, 2)
  // New usage: add(1, 2, { validate: true })
  
  const result = a + b;
  
  if (options.validate && result > Number.MAX_SAFE_INTEGER) {
    throw new Error('Result exceeds safe integer limit');
  }
  
  return result;
}

function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

function power(base, exponent) {
  validateNumbers(base, exponent);
  
  // Handle edge cases
  if (exponent < 0 && base === 0) {
    throw new Error('Cannot raise 0 to a negative power');
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
  
  