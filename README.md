# NPM Test Package

A comprehensive Node.js utility package for mathematical operations and string manipulation.

## Installation

```bash
npm install npm-test
```

## Usage

### Mathematical Functions

```javascript
const { add, multiply, power } = require('npm-test');

// Add two numbers
const sum = add(5, 3); // returns 8

// Multiply two numbers
const product = multiply(4, 6); // returns 24

// Calculate power
const result = power(2, 3); // returns 8
```

### String Utilities

```javascript
const { formatGreeting } = require('npm-test');
const { capitalize, reverse, wordCount } = require('npm-test/utils');

// Format a greeting message
const greeting = formatGreeting('John'); // returns "Hello, John! Welcome to our application."

// String manipulation
const capitalized = capitalize('hello'); // returns "Hello"
const reversed = reverse('world'); // returns "dlrow"
const count = wordCount('hello world'); // returns 2
```

## API

### Mathematical Functions

#### `add(a, b, options = {})`
Adds two numbers together.

- `a` (number): First number
- `b` (number): Second number
- `options` (object): Optional configuration
  - `validate` (boolean): Enable result validation
- Returns: The sum of a and b

#### `multiply(a, b)`
Multiplies two numbers.

- `a` (number): First number
- `b` (number): Second number
- Returns: The product of a and b

#### `power(base, exponent)`
Calculates the power of a number.

- `base` (number): The base number
- `exponent` (number): The exponent
- Returns: The result of base raised to the power of exponent

### String Functions

#### `formatGreeting(name)`
Formats a greeting message for the given name.

- `name` (string): The name to greet
- Returns: Formatted greeting string

#### `capitalize(str)`
Capitalizes the first letter of a string.

- `str` (string): The input string
- Returns: String with first letter capitalized

#### `reverse(str)`
Reverses a string.

- `str` (string): The input string
- Returns: Reversed string

#### `wordCount(str)`
Counts words in a string.

- `str` (string): The input string
- Returns: Number of words

## Testing

```bash
npm test
```

This will run tests for both mathematical functions and string utilities.

## Examples

### Basic Usage
```javascript
const { add, multiply, power } = require('npm-test');

console.log(add(10, 5));        // 15
console.log(multiply(3, 4));    // 12
console.log(power(2, 8));       // 256
```

### String Manipulation
```javascript
const { capitalize, reverse, wordCount } = require('npm-test/utils');

console.log(capitalize('hello'));           // "Hello"
console.log(reverse('javascript'));         // "tpircsavaj"
console.log(wordCount('hello world test')); // 3
```

### Error Handling
```javascript
const { add, power } = require('npm-test');

try {
  add('5', 3); // Throws: "Both arguments must be numbers"
} catch (error) {
  console.error(error.message);
}

try {
  power(0, -1); // Throws: "Cannot raise 0 to a negative power"
} catch (error) {
  console.error(error.message);
}
```

## Breaking Changes

### Version 2.0.0
- The `add` function now accepts an optional `options` parameter
- Old usage: `add(1, 2)`
- New usage: `add(1, 2, { validate: true })`

## License

MIT