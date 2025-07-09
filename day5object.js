//1. Creating Objects
//(a) Object Literals
//Most common way to create objects.
const person = {
  name: "Niraj",
  age: 24,
  isStudent: true
};

//(b) Constructor Function
//Used to create multiple objects with the same structure.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const obj1 = new Person("Niraj", 24);
const obj2 = new Person("Rohan", 22);

//(c) Object.create()
//Creates a new object with an existing object as prototype.
const animal = {
  eats: true
};
const dog = Object.create(animal);
dog.barks = true;

//2. Accessing Properties
// Dot Notation
console.log(person.name); // Niraj

//Bracket Notation
//Useful when keys are dynamic or contain spaces/special characters.
console.log(person["age"]); // 24

let key = "isStudent";
console.log(person[key]); // true


//3. this Keyword
//this refers to the object on which the method is called.
const student = {
  name: "Niraj",
  greet: function () {
    return `Hi, I am ${this.name}`;
  }
};

console.log(student.greet()); // Hi, I am Niraj

//In arrow functions, this does not bind to the object—it inherits from the surrounding context.

// 4. Nested Objects
//Objects can contain other objects.
const user = {
  name: "Niraj",
  address: {
    city: "Pune",
    pin: 411001
  },
  contact: {
    email: "niraj@example.com",
    phone: {
      personal: "1234567890",
      office: "0987654321"
    }
  }
};
console.log(user.contact.phone.office); // 0987654321

//5. Object Methods
//Functions inside objects are called methods.
const car = {
  brand: "Honda",
  start: function () {
    return `${this.brand} is starting...`;
  }
};

console.log(car.start()); // Honda is starting...

// 6. Useful Object Methods
// Object.keys(obj)
//Returns an array of property names.

const book = {
  title: "JavaScript",
  pages: 200
};

console.log(Object.keys(book)); // ["title", "pages"]

//Object.values(obj)
//Returns an array of property values.
console.log(Object.values(book)); // ["JavaScript", 200]

//Object.entries(obj)
//Returns an array of [key, value] pairs.
console.log(Object.entries(book)); 
// [["title", "JavaScript"], ["pages", 200]]
