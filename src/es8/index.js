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

//Trailing comas 

const object = {
  name: 'oscar',
}


//Async/Await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('Hello World'),3000)
      : reject(new Error('Test Error'));
  })
}

const helloAsync = async() => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

// Manenjo de la promesa con try & catch dentro de nuestro Async function

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello)
  } catch (error){
    console.log(error)
  }
}

anotherFunction();