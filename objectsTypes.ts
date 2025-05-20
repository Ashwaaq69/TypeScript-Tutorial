
// Example 1: Simple object type
type Book = {
    title: string;
    author: string;
    pages: number;
};

const myBook: Book = {
    title: "TypeScript Basics",
    author: "Jane Doe",
    pages: 120
};

// Example 2: Object with optional and readonly properties
type Product = {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
};

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 999
};

// Example 3: Object with index signature
type ErrorMessages = {
    [code: string]: string;
};

const errors: ErrorMessages = {
    "404": "Not Found",
    "500": "Internal Server Error"
};

// Example 4: Object with nested objects
type Company = {
    name: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
};

const company: Company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "Metropolis",
        zip: "12345"
    }
};

