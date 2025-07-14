# npm-test

A comprehensive Node.js utility package with mathematical and string manipulation functions.

## Installation

```bash
npm install npm-test
```

## Usage

### Mathematical Functions

The package provides several mathematical utility functions:

#### factorial(n)
Calculates the factorial of a number.

```javascript
const { factorial } = require('npm-test');

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
```

#### fibonacci(n)
Calculates the nth Fibonacci number using an optimized iterative approach.

```javascript
const { fibonacci } = require('npm-test');

console.log(fibonacci(10)); // 55
console.log(fibonacci(0));  // 0
```

#### isPrime(n)
Checks if a number is prime.

```javascript
const { isPrime } = require('npm-test');

console.log(isPrime(17)); // true
console.log(isPrime(4));  // false
```

### String Functions

#### reverseString(str)
Reverses a string with proper error handling.

```javascript
const { reverseString } = require('npm-test');

console.log(reverseString('hello')); // 'olleh'
```

## API Reference

For detailed API documentation, see the individual function files.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 