// Object.entries

const data = {
  frontend: 'Mario',
  backend: 'Tina',
  Design: 'Manu'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Objects value
const values = Object.values(data)
console.log(values);
console.log(values.length);

//Padding

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '----'));
console.log(string.padEnd(12, '----'));