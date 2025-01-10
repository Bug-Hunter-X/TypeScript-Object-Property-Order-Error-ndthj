function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

const person1 = { name: "John Doe", age: 30 };
printName(person1); // Works fine

const person2 = { name: "Jane Doe" };
printName(person2); // Works fine

// Solution: Ensure the order of properties in object literals match the order in the interface definition.
const person3 = { name: "Peter Pan", age: 25 }; //Fixed!
printName(person3); // Works fine now

//Alternatively, use an interface that allows for more flexibility:
interface Person {
  name: string;
  age?: number;
}

function printName2(person: Person) {
  console.log(person.name);
}

printName2({ age: 25, name: "Peter Pan" });//Works fine