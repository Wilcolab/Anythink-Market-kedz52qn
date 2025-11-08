function convertToCamelCase(str) {
    // Handle empty string
    if (!str) return '';
    
    // First split the string by spaces and punctuation
    const words = str.split(/[\s\-_.,;:!?]+/);
    
    // Convert first word to lowercase
    const result = words[0].toLowerCase();
    
    // Convert subsequent words to capitalize first letter
    return result + words.slice(1)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// Test cases
console.log(convertToCamelCase("RatneshRastogi")); // "ratneshRastogi"
console.log(convertToCamelCase("MicrosoftCopilot")); // "microsoftCopilot"
console.log(convertToCamelCase("hello world")); // "helloWorld"
console.log(convertToCamelCase("first_second.third")); // "firstSecondThird"
console.log(convertToCamelCase("")); // ""