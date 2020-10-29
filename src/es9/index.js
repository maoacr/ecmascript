//operador de reposo

const obj = {
  name: 'Mario',
  age: 27,
  country: 'COL'
}

let {name, ...all } = obj;
console.log(all)


const obj2 = {
  name: 'Mao',
  age: 27,
  country: 'COL'
}

const obj3 = {
  ...obj2,
  country: 'Platzi'
}

console.log(obj3);

//Promise.finally

const helloWorld = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world !'), 3000)
      : reject(new Error('Test error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(()=> console.log('Finalizó'))


  // Regex

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

  const match = regexData.exec('2020-10-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];

  console.log(year, month, day);