const Caigido = require('./caigido');

// Simple test suite
console.log('Running Caigido tests...\n');

let passed = 0;
let failed = 0;

function test(description, assertion) {
  try {
    if (assertion()) {
      console.log(`✓ ${description}`);
      passed++;
    } else {
      console.log(`✗ ${description}`);
      failed++;
    }
  } catch (error) {
    console.log(`✗ ${description} - Error: ${error.message}`);
    failed++;
  }
}

// Test reverse
test('reverse() should reverse a string', () => {
  return Caigido.reverse('hello') === 'olleh';
});

test('reverse() should handle empty string', () => {
  return Caigido.reverse('') === '';
});

// Test alternatingCase
test('alternatingCase() should alternate character case', () => {
  return Caigido.alternatingCase('hello') === 'hElLo';
});

test('alternatingCase() should handle mixed case input', () => {
  return Caigido.alternatingCase('HeLLo') === 'hElLo';
});

// Test countVowels
test('countVowels() should count vowels correctly', () => {
  return Caigido.countVowels('hello') === 2;
});

test('countVowels() should return 0 for no vowels', () => {
  return Caigido.countVowels('bcdfg') === 0;
});

test('countVowels() should count uppercase vowels', () => {
  return Caigido.countVowels('AEIOU') === 5;
});

// Test rot13
test('rot13() should encode text', () => {
  return Caigido.rot13('hello') === 'uryyb';
});

test('rot13() should be reversible', () => {
  const original = 'test';
  return Caigido.rot13(Caigido.rot13(original)) === original;
});

// Test isPalindrome
test('isPalindrome() should identify palindromes', () => {
  return Caigido.isPalindrome('racecar') === true;
});

test('isPalindrome() should handle non-palindromes', () => {
  return Caigido.isPalindrome('hello') === false;
});

test('isPalindrome() should ignore case and spaces', () => {
  return Caigido.isPalindrome('A man a plan a canal Panama') === true;
});

// Test error handling
test('reverse() should throw TypeError for non-string', () => {
  try {
    Caigido.reverse(123);
    return false;
  } catch (error) {
    return error instanceof TypeError;
  }
});

console.log(`\nTests completed: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
