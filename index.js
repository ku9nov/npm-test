function helloWorld() {
    console.log("Hello, world!");
}

/**
 * Utility function to format a greeting message
 * @param {string} name - The name to greet
 * @returns {string} Formatted greeting message
 */
function formatGreeting(name) {
  // Optimized for better performance
  return `Hello, ${name.trim()}! Welcome to our application.`;
}

function add(a, b) {
  // Add input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

module.exports = {
  add,
  formatGreeting
};
helloWorld(); 
  
  