// const user = {
//   fname: "Mahesh",
//   lname: "sutar",
//   age: 30,
//   isLoggedIn: true,
// };

// console.log(user);

function user(firstName, LastName) {
  this.fname = firstName;
  this.lname = LastName;
}

const obj1 = new user("Niraj", "Patil");
const obj2 = new user("Ganesh", "Patel");

console.log(obj1.fname); //dot notion
console.log(obj2.lname);
console.log(obj1);
console.log(obj2["fname"]);
