const { add, formatGreeting } = require('./index');

test('helloWorld should print "Hello, world!"', () => {
  console.log = jest.fn(); 
  helloWorld();
  expect(console.log).toHaveBeenCalledWith("Hello, world!");
});

test('formatGreeting should return formatted greeting message', () => {
  expect(formatGreeting('John')).toBe('Hello, John! Welcome to our application.');
  expect(formatGreeting('Alice')).toBe('Hello, Alice! Welcome to our application.');
});
