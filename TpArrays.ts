// Example 1: Basic Array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Example 2: Array of Strings
let fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// Example 3: Mixed Array using 'any'
let mixedArray: any[] = [1, "Hello", true];
console.log("Mixed Array:", mixedArray);

// Example 4: Array with Generics
let genericArray: Array<number> = [10, 20, 30];
console.log("Generic Array:", genericArray);

// Example 5: Multi-dimensional Array
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("Matrix:", matrix);

// Example 6: Using Array Methods
let colors: string[] = ["Red", "Green", "Blue"];
colors.push("Yellow"); // Add an element
console.log("After Push:", colors);
colors.pop(); // Remove the last element
console.log("After Pop:", colors);
console.log("Length of Colors Array:", colors.length);

// Example 7: Iterating through an Array
let animals: string[] = ["Dog", "Cat", "Elephant"];
animals.forEach((animal) => {
    console.log("Animal:", animal);
});

// Example 8: Tuple (Fixed Array)
let tuple: [string, number] = ["Age", 25];
console.log("Tuple:", tuple);

// example 9: readonly array

const names: readonly string[] = ["Dylan"];

// names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// try removing the readonly modifier and see if it works?
console.log(names);