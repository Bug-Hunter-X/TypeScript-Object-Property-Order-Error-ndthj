function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const person1 = { name: "John Doe", age: 30 };
printName(person1); // Works fine

const person2 = { name: "Jane Doe" };
printName(person2); // Works fine

const person3 = { age: 25, name: "Peter Pan" };
printName(person3); //ERROR: Argument of type '{ age: number; name: string; }' is not assignable to parameter of type '{ name: string; age?: number; }'.