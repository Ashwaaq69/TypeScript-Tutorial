// SpecialTypes.ts

// Example of the `any` type
let anyValue: any = "Hello, World!";
anyValue = 42; // No error
anyValue = true; // No error
console.log(anyValue);

// Example of the `unknown` type
let unknownValue: unknown = "Hello, TypeScript!";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

// Example of the `never` type
function throwError(message: string): never {
    throw new Error(message);
}

// Example of the `void` type
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a message.");

// Example of the `null` and `undefined` types
let nullValue: null = null;
let undefinedValue: undefined = undefined;

console.log(nullValue, undefinedValue);