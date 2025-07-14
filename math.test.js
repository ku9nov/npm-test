const { factorial, fibonacci, isPrime } = require('./math');

describe('Mathematical Functions', () => {
  describe('factorial', () => {
    test('should calculate factorial of positive numbers', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
    });

    test('should throw error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers');
      expect(() => factorial(-5)).toThrow('Factorial is not defined for negative numbers');
    });
  });

  describe('fibonacci', () => {
    test('should calculate fibonacci numbers correctly', () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(10)).toBe(55);
    });

    test('should handle negative numbers', () => {
      expect(fibonacci(-1)).toBe(0);
      expect(fibonacci(-5)).toBe(0);
    });
  });

  describe('isPrime', () => {
    test('should identify prime numbers correctly', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(17)).toBe(true);
    });

    test('should identify non-prime numbers correctly', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(10)).toBe(false);
    });

    test('should handle edge cases', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-1)).toBe(false);
    });
  });
}); 