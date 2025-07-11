const { add, formatGreeting, multiply, power, helloWorld } = require('./index');

test('helloWorld should print "Hello, world!"', () => {
  console.log = jest.fn(); 
  helloWorld();
  expect(console.log).toHaveBeenCalledWith("Hello, world!");
});

test('formatGreeting should return formatted greeting message', () => {
  expect(formatGreeting('John')).toBe('Hello, John! Welcome to our application.');
  expect(formatGreeting('Alice')).toBe('Hello, Alice! Welcome to our application.');
});

test('multiply should return product of two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-2, 4)).toBe(-8);
  expect(multiply(0, 5)).toBe(0);
});

test('multiply should throw error for non-numbers', () => {
  expect(() => multiply('2', 3)).toThrow('All arguments must be numbers');
  expect(() => multiply(2, '3')).toThrow('All arguments must be numbers');
});

test('power should return base raised to exponent', () => {
  expect(power(2, 3)).toBe(8);
  expect(power(5, 2)).toBe(25);
  expect(power(2, 0)).toBe(1);
});

test('power should throw error for non-numbers', () => {
  expect(() => power('2', 3)).toThrow('All arguments must be numbers');
  expect(() => power(2, '3')).toThrow('All arguments must be numbers');
});

test('power should throw error for zero to negative power', () => {
  expect(() => power(0, -1)).toThrow('Cannot raise 0 to a negative power');
});
