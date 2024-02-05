// Array destructuring
let fruits = ["Banana", "Apple"];
let [a, b] = fruits;
console.log(a, b);

// Object desctructuring
let user = { username: "Mao", age: 30 };
let { username, age } = user;
console.log(username, age);

// Spread operator
let person = { name: "Mayito", age: 5 };
let country = "COL";
let copyPerson = { ...person, country };
console.log(copyPerson);

// Rest param
function sum(num, ...values) {
  console.log(values);
  let result = num + values[0];
  return result;
}
console.log(sum(7, 8, 7));
