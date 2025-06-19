// let x = 10; //gloal variable
// let a = 50;//global variable
// if (true) {
//   let x = 20; // New variable x inside block // local variable
//   console.log(x); // 20
//   console.log(a); //50
// }
// console.log(x); //10

// let name;
// name = "akshay";

// const speed = 40; // use fixed value
// speed = 50; // constant value no updating
// console.log(speed); //error:ssigment to constant variable
// redcalrtion and reassign not allowed

// const PI; //declare
// PI = 25;

// const pi = 3.14; // intilized
// pi = 3.1456;
// console.log(pi);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const obj1 = new Person("Niraj", 24);
// const obj2 = new Person("Rohan", 22);

// console.log(obj1.name);
// console.log(obj2.name);

const person = {
  name: "Niraj",
  age: 23,
  job: "Developer",
};

let { name, age = 30, job } = person;

console.log(name); // Niraj
console.log(age); // 23
console.log(job); // Developer
