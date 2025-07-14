/**
 * Mathematical utility functions
 */

/**
 * Calculate factorial of a number
 * @param {number} n - The number to calculate factorial for
 * @returns {number} The factorial result
 */
function factorial(n) {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * Calculate fibonacci number
 * @param {number} n - The position in fibonacci sequence
 * @returns {number} The fibonacci number
 */
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Check if number is prime
 * @param {number} n - The number to check
 * @returns {boolean} True if prime, false otherwise
 */
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  factorial,
  fibonacci,
  isPrime
}; 