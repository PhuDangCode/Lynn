const Caigido = require('./caigido');

console.log('=== Caigido Examples ===\n');

// Example 1: Reverse text
console.log('1. Reverse text:');
console.log(`   Input: "hello world"`);
console.log(`   Output: "${Caigido.reverse('hello world')}"`);
console.log();

// Example 2: Alternating case
console.log('2. Alternating case:');
console.log(`   Input: "javascript"`);
console.log(`   Output: "${Caigido.alternatingCase('javascript')}"`);
console.log();

// Example 3: Count vowels
console.log('3. Count vowels:');
console.log(`   Input: "beautiful"`);
console.log(`   Output: ${Caigido.countVowels('beautiful')} vowels`);
console.log();

// Example 4: ROT13 cipher
console.log('4. ROT13 cipher:');
const secret = 'secret message';
const encoded = Caigido.rot13(secret);
console.log(`   Input: "${secret}"`);
console.log(`   Encoded: "${encoded}"`);
console.log(`   Decoded: "${Caigido.rot13(encoded)}"`);
console.log();

// Example 5: Check palindrome
console.log('5. Check palindrome:');
console.log(`   "racecar" is palindrome: ${Caigido.isPalindrome('racecar')}`);
console.log(`   "hello" is palindrome: ${Caigido.isPalindrome('hello')}`);
console.log(`   "A man a plan a canal Panama" is palindrome: ${Caigido.isPalindrome('A man a plan a canal Panama')}`);
