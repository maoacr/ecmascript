//Default params Before ECMAScript 6

function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 27;
  var country = country || "COL";
  console.log(name, age, country);
}

newFunction();

//After es6

function newFunction2(name = "oscar", age = 32, country = "COL") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Alejandro", "22", "MX");

//Template literals

let hello = "Hello";
let world = "world";

//Before ES6
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//After EC6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Saltos de Linea dentro de nuestros Templates literals
let saltosDeLinea = `Ahora solo basta con un enter y
tendremos nuesra nueva linea de texto sin más.`;

//Destructuración

let person = {
  name: "Mario",
  age: "27",
  country: "COL",
};
//Before ES6
console.log(person.name, person.age, person.country);

//After ES6
let { age, country } = person;
console.log(age, country);

// Spread Opertor | Operador de propagación

let team1 = ["Mario", "Juan", "Valeria"];
let team2 = ["Tina", "Manu", "Yura"];

//After ES6
let education = ["David", ...team1, ...team2];
console.log(education);

// Var , Let, Const
{
  var globalVar = "Global Var";
}
{
  let globalLet = "Global Let";
  console.log(globalLet);
}
console.log(globalVar);

const a = "b";
a = "a"; //Error  - No reasignable

let name = "Mario";
let age = "27";
//ES5
obj = { name: name, age: age };
//ES6
obj2 = { name, age };
console.log(obj2);

//Arrow Functions

const names = [
  { name: "Mario", age: "27" },
  { name: "Tina", age: "5" },
];
//Before ES6
let listOfNames = name.map(function (item) {
  console.log(item.name);
});

//After ES6
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfName3 = (name, age, country) => {
  //Todo nuestro codigo
};

const listOfName4 = (name) => {
  //Mi bloque de codigo
};

const square = (num) => num * num;

//Promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey !, todo salio bien");
    } else {
      reject("Ups !!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//Clases

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

//Módulos
import myFunction from "./module";
myFunction();

//Generators

function* helloWorld() {
  if (true) {
    yield "Heloooo !";
  }
  if (true) {
    yield "world";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
