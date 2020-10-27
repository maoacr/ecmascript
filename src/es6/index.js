//Default params Before ECMAScript 6 

function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 27;
  var country = country || "COL";
  console.log(name, age, country);
}

newFunction();

//After es6

function newFunction2(name = 'oscar', age = 32, country = "COL") {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Alejandro', '22', 'MX');

//Template literals

let hello = "Hello"; 
let world = "world";

//Before ES6
let epicPhrase = hello +  ' ' + world;
console.log(epicPhrase);

//After EC6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);

//Saltos de Linea dentro de nuestros Templates literals
let saltosDeLinea = `Ahora solo basta con un enter y
tendremos nuesra nueva linea de texto sin más.`

// Var , Let, Const 