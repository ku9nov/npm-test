const { capitalize, reverse, wordCount } = require('./utils');

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('should capitalize first letter of string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('test')).toBe('Test');
    });

    test('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should throw error for non-string input', () => {
      expect(() => capitalize(123)).toThrow('Input must be a string');
      expect(() => capitalize(null)).toThrow('Input must be a string');
    });
  });

  describe('reverse', () => {
    test('should reverse string', () => {
      expect(reverse('hello')).toBe('olleh');
      expect(reverse('world')).toBe('dlrow');
      expect(reverse('test')).toBe('tset');
    });

    test('should handle empty string', () => {
      expect(reverse('')).toBe('');
    });

    test('should throw error for non-string input', () => {
      expect(() => reverse(123)).toThrow('Input must be a string');
    });
  });

  describe('wordCount', () => {
    test('should count words correctly', () => {
      expect(wordCount('hello world')).toBe(2);
      expect(wordCount('this is a test')).toBe(4);
      expect(wordCount('single')).toBe(1);
    });

    test('should handle multiple spaces', () => {
      expect(wordCount('hello   world')).toBe(2);
      expect(wordCount('  test  ')).toBe(1);
    });

    test('should throw error for non-string input', () => {
      expect(() => wordCount(123)).toThrow('Input must be a string');
    });
  });
}); 