/**
 * Convert a string to camelCase.
 * Handles spaces, underscores, hyphens and mixed separators.
 *
 * Examples:
 *   toCamelCase('first name')   // 'firstName'
 *   toCamelCase('user_id')      // 'userId'
 *   toCamelCase('SCREEN_NAME')  // 'screenName'
 *   toCamelCase('mobile-number')// 'mobileNumber'
 *
 * Returns an empty string for falsy input.
 */
function toCamelCase(input) {
    if (!input) return '';

    const str = String(input).trim();
    if (str === '') return '';

    // If there are no common separators and the string already looks like camelCase,
    // return as-is to avoid changing already-camelCased values.
    if (!/[\s_\-]/.test(str) && /[a-z][A-Z]/.test(str)) {
        return str;
    }

    // Split on any non-alphanumeric character (spaces, underscores, hyphens, etc.)
    const parts = str.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';

    const first = parts[0].toLowerCase();
    const rest = parts.slice(1).map(p => {
        const lower = p.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    });

    return first + rest.join('');
}

module.exports = toCamelCase;