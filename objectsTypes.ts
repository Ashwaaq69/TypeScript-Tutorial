const car: { type: string, mileage?: number} = {
    type: "Toyota"
};

car.mileage = 2000;
console.log(car)


type User = {
  name: string;
  age: number;
};


type Config = {
  readonly apiKey: string;
  timeout: number;
};


type Dictionary = {
  [key: string]: string;
};

// nested objects

type Employee = {
  id: number;
  personalInfo: {
    firstName: string;
    lastName: string;
  };
};


// using record utility type

type Roles = 'admin' | 'user' | 'guest';

const rolePermissions: Record<Roles, string[]> = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};


// function inside an object

type Calculator = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};


//object with union types

// type Response = {
//   status: 'success' | 'error';
//   data: string | null;
// };

