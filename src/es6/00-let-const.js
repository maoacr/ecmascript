//Let

//Let puede ser declarada e inicializada
let nombre = "Mao";

//Let permite ser reasignada
nombre = "Yura";

//Let NO permite ser redeclarada
let nombre = "Alejandro";

//Const

//Const puede ser declarada e inicializada
const apellido = "Crespo";

//Const NO permite ser reasignada
apellido = "Reyes";

//Const NO permite ser redeclarada
const apellido = "Cepeda";

// S C O P E

function square(num) {
  if (num) {
    var num1 = 1;
    let num2 = 2;
    const num3 = 3;
  }
  console.log(num1); //Function scope
  console.log(num2); //Block scope
  console.log(num3); //Block scope
}

square();
