//Includes

let numbers = [1, 2 ,3, 4, 5, 8, 9, 10];

const validate = (i) => {
  if (numbers.includes(i)) {
    console.log(`Si se encuentra el valor ${i}`)
  } else {
    console.log(`No se encuentra el valor ${i}`)
  };
};

validate(2);
validate(6);

 // Elevar a las potencia

 let base = 4;
 let exponent = 3;
 let result = base ** exponent;
 console.log(result);