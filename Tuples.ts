// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

// Example 1: Basic Tuple
let user: [number, string];
user = [1, "John"]; // Correct
// user = ["John", 1]; // Error: Type 'string' is not assignable to type 'number'
console.log(user)
// Example 2: Tuple with Optional Elements
let product: [number, string, boolean?];
product = [101, "Laptop"];
product = [102, "Phone", true];
console.log(product)
// Example 3: Tuple with Rest Elements
let rgb: [number, number, number, ...number[]];
rgb = [255, 0, 0];
rgb = [255, 0, 0, 128, 64];

console.log(rgb)
// Example 4: Destructuring Tuples
// let employee: [number, string] = [1, "Alice"];
// let [id, name] = employee;
// console.log(id); // Output: 1
// console.log(name); // Output: Alice

// Example 5: Tuple with Readonly
let coordinates: readonly [number, number] = [10, 20];
// coordinates[0] = 15; // Error: Cannot assign to '0' because it is a read-only property

console.log(coordinates)