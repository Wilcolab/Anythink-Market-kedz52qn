/**
 * Convert a string to camelCase.
 *
 * This function transforms a given string into camelCase format, where the first word is in lowercase
 * and each subsequent word starts with an uppercase letter. Non-alphanumeric characters are treated as
 * separators. If the input is already a single token, it will be returned with the first character
 * lowercased. The function also handles empty strings and throws an error for non-string inputs.
 *
 * @function convertToCamelCase
 * @param {string} input - The input string to be converted to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} Throws a TypeError if the input is not a string.
 *
 * @example
 * convertToCamelCase("first name"); // returns "firstName"
 * convertToCamelCase("user_id");    // returns "userId"
 * convertToCamelCase("mobile-number"); // returns "mobileNumber"
 * convertToCamelCase("FooBar");      // returns "fooBar"
 * convertToCamelCase("");             // returns ""
 * convertToCamelCase("   ");          // returns ""
 * 
 * @example
 * // Throws TypeError
 * convertToCamelCase(123);            // throws TypeError
 */
function convertToCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return input
        .trim()
        .split(/[^a-zA-Z0-9]+/)
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

/**
 * Convert a string to dot.case format.
 *
 * This function transforms a given string into dot.case format, where words are separated by dots.
 * Non-alphanumeric characters are treated as separators. The function handles empty strings and
 * throws an error for non-string inputs.
 *
 * @function convertToDotCase
 * @param {string} input - The input string to be converted to dot.case format.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} Throws a TypeError if the input is not a string.
 *
 * @example
 * convertToDotCase("first name");      // returns "first.name"
 * convertToDotCase("user_id");         // returns "user.id"
 * convertToDotCase("mobile-number");    // returns "mobile.number"
 * convertToDotCase("");                 // returns ""
 * convertToDotCase("   ");              // returns ""
 * 
 * @example
 * // Throws TypeError
 * convertToDotCase(123);                // throws TypeError
 */
function convertToDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return input
        .trim()
        .split(/[^a-zA-Z0-9]+/)
        .join('.');
}
