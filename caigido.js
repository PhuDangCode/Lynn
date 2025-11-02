/**
 * Caigido - A simple text transformation utility
 * Provides various text manipulation functions
 */

class Caigido {
  // ASCII character code constants
  static ASCII_UPPERCASE_A = 65;
  static ASCII_LOWERCASE_A = 97;
  /**
   * Reverse a string
   * @param {string} text - The text to reverse
   * @returns {string} The reversed text
   */
  static reverse(text) {
    if (typeof text !== 'string') {
      throw new TypeError('Input must be a string');
    }
    return text.split('').reverse().join('');
  }

  /**
   * Convert text to alternating case (aLtErNaTiNg)
   * @param {string} text - The text to transform
   * @returns {string} The text in alternating case
   */
  static alternatingCase(text) {
    if (typeof text !== 'string') {
      throw new TypeError('Input must be a string');
    }
    return text.split('').map((char, index) => {
      return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join('');
  }

  /**
   * Count vowels in a string
   * @param {string} text - The text to analyze
   * @returns {number} The number of vowels
   */
  static countVowels(text) {
    if (typeof text !== 'string') {
      throw new TypeError('Input must be a string');
    }
    const vowels = text.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
  }

  /**
   * Transform text by rotating characters (Caesar cipher with shift 13)
   * @param {string} text - The text to transform
   * @returns {string} The transformed text
   */
  static rot13(text) {
    if (typeof text !== 'string') {
      throw new TypeError('Input must be a string');
    }
    return text.replace(/[a-zA-Z]/g, (char) => {
      const start = char <= 'Z' ? Caigido.ASCII_UPPERCASE_A : Caigido.ASCII_LOWERCASE_A;
      return String.fromCharCode(start + (char.charCodeAt(0) - start + 13) % 26);
    });
  }

  /**
   * Check if text is a palindrome
   * @param {string} text - The text to check
   * @returns {boolean} True if palindrome, false otherwise
   */
  static isPalindrome(text) {
    if (typeof text !== 'string') {
      throw new TypeError('Input must be a string');
    }
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
}

module.exports = Caigido;
