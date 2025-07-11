/**
 * Mathematical utility functions
 */
function add(a, b) {
  // Add input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
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
  console.log("Hello, world!");
}

// Export all functions
module.exports = {
  add,
  formatGreeting,
  helloWorld
};

// Run main function if this file is executed directly
if (require.main === module) {
  helloWorld();
}
  
  