const helloWorld = require('./index');

test('helloWorld should print "Hello, world!"', () => {
  console.log = jest.fn(); 
  helloWorld();
  expect(console.log).toHaveBeenCalledWith("Hello, world!");
});
