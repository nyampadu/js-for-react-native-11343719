function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // squares the numbers
        } else {
            return num * 3; // Triple the odd numbers
        }
    });
}

const Array = [1, 2, 3, 4, 5];
console.log(processArray(exampleArray));

//Task 2
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize
        } else {
            return str.toLowerCase(); // Convert to lowercase 
        }
    });
}

// Example usage(Test):
// const strings = ["Nana", "Computers", "React", "TypeScript", "JavaScript"];
// const numbers = processArray([1, 2, 3, 4, 5]);
// console.log(formatArrayStrings(strings, numbers)); // Output: ["nana", "COMPUTERS", "react", "TYPESCRIPT", "javascript"]
