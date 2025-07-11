function helloWorld() {
    console.log("Hello, world!");
}

/**
 * Utility function to format a greeting message
 * @param {string} name - The name to greet
 * @returns {string} Formatted greeting message
 */
function formatGreeting(name) {
  return `Hello, ${name}! Welcome to our application.`;
}

module.exports = {
  add,
  formatGreeting
};
helloWorld(); 
  
  