# NPM Test Package

A simple Node.js package for testing and demonstration purposes.

## Installation

```bash
npm install npm-test
```

## Usage

```javascript
const { add, formatGreeting } = require('npm-test');

// Add two numbers
const result = add(5, 3); // returns 8

// Format a greeting message
const greeting = formatGreeting('John'); // returns "Hello, John! Welcome to our application."
```

## API

### `add(a, b)`
Adds two numbers together.

- `a` (number): First number
- `b` (number): Second number
- Returns: The sum of a and b

### `formatGreeting(name)`
Formats a greeting message for the given name.

- `name` (string): The name to greet
- Returns: Formatted greeting string

## Testing

```bash
npm test
```

## License

MIT