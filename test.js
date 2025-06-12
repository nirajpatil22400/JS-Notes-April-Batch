const fruits = ["banana", "apple", "cherry", "orange", "coconut", "kiwi"];
fruits.sort();
console.log(fruits);

const nums = [10, 5, 25, 1];
// nums.sort(); //treated as string '10' comes before '5'
nums.sort((a, b) => a - b); //a -b gives ascending ordr 
// b - a gives descending order
console.log(nums);
