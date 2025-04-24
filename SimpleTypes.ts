// TypeScript supports some simple types (primitives) you may know.

// There are three main primitives in JavaScript and TypeScript.

// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"
// There are also 2 less common primitives used in later versions of Javascript and TypeScript.

// bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
// symbol are used to create a globally unique identifier.



// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit
// Implicit
// In both examples below firstName is of type string

// Explicit Type
// Explicit - writing out the type:

// let firstname: string = "Ashwaq";
// console.log(typeof firstname); // string


// Explicit type assignment are easier to read and more intentional.

// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:

// let firstName = "Ashuu";
// console.log(typeof firstName);


// Error In Type Assignment
// TypeScript will throw an error if data types do not match.

// let firstName: string = "Ashuu";
// firstName = 310;
// console.log(typeof firstName);

// JavaScript will not throw an error for mismatched types.

// Unable to Infer
// TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.

const json = JSON.parse("33");
console.log(typeof json);
