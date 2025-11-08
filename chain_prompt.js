/**
 * Converts a string to kebab-case format.
 * @param {*} input - The input to convert
 * @returns {string} The kebab-case string
 * @throws {Error} If input is invalid
 */
function toKebabCase(input) {
    // Check if input is valid
    if (input === undefined || input === null) {
        throw new Error('Input cannot be null or undefined');
    }

    // Check if input is a string or can be converted to string
    if (typeof input !== 'string' && !(input instanceof String)) {
        if (typeof input === 'number' || typeof input === 'boolean') {
            throw new Error(`Invalid input type: ${typeof input}. Expected: string`);
        }
    }

    // Convert to string and trim whitespace
    let str = String(input).trim();

    // Check if string is empty after trimming
    if (str.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    return str
        // Replace special characters with spaces
        .replace(/[^a-zA-Z0-9\s-]/g, ' ')
        // Replace multiple spaces with single space
        .replace(/\s+/g, ' ')
        // Convert to lowercase
        .toLowerCase()
        // Replace spaces with hyphens
        .replace(/\s/g, '-')
        // Remove multiple consecutive hyphens
        .replace(/-+/g, '-')
        // Remove leading and trailing hyphens
        .replace(/^-+|-+$/g, '');
}

// Example usage:
// console.log(toKebabCase('hello World')); // 'hello-world'
// console.log(toKebabCase('This is a test')); // 'this-is-a-test'
// console.log(toKebabCase('Special@#$Characters')); // 'special-characters'
// console.log(toKebabCase('  Trim  Spaces  ')); // 'trim-spaces'