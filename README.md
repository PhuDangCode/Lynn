# Lynn

OiXoiOi

## Caigido

A simple text transformation utility for JavaScript providing various text manipulation functions.

### Features

- **reverse(text)**: Reverse any string
- **alternatingCase(text)**: Convert text to alternating case (aLtErNaTiNg)
- **countVowels(text)**: Count the number of vowels in a string
- **rot13(text)**: Apply ROT13 cipher transformation
- **isPalindrome(text)**: Check if text is a palindrome (ignores case and non-alphanumeric characters)

### Installation

```bash
npm install
```

### Usage

```javascript
const Caigido = require('./caigido');

// Reverse text
console.log(Caigido.reverse('hello')); // 'olleh'

// Alternating case
console.log(Caigido.alternatingCase('javascript')); // 'jAvAsCrIpT'

// Count vowels
console.log(Caigido.countVowels('beautiful')); // 5

// ROT13 cipher
console.log(Caigido.rot13('secret')); // 'frperg'

// Check palindrome
console.log(Caigido.isPalindrome('racecar')); // true
```

### Examples

Run the examples:
```bash
node example.js
```

### Testing

Run the test suite:
```bash
npm test
```
