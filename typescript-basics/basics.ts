// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Miia';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
 name: string;
  age: number;
}

let person: Person;

person = {
  name: 'Miia',
  age: 32
};

// person = {
//   isEmployee: true
// };

let people: Person[];

//Type interference

let course: string | number = 'React - The Complete Guide';

course = 12341;