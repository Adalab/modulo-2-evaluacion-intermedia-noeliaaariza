"use strict";

/*
- declarar variables para recoger datos del input, del botón, del <p> que da las pistas y del <p> con el contador de intentos
- Generar número random con getRandomNumber
- Guardar valor generado en variable global
- Hacer un eventListener al botón para escuchar el click y llamar a la función manejadora
- la función contendrá una variable que almacenará el input.value y llamará a función condicional
- función condicional: comparará lo siguiente:
    si userNum === num aleatorio : enhorabuena campeona;
    si no si userNum < aleatorio : es bajo;
    si no si userNum > aleatorio : es alto;
    si no si userNum > 100: numero inválido;
    si no si userNum < 0: número inválido;
 - crear función contador que sume más uno cada vez que haces click. Añadir a la función manejadora   
*/

const userNumber = document.querySelector(".js-userNumber");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const attempts = document.querySelector(".js-attempts");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNum = getRandomNumber(100);
console.log("el numero aleatorio es " + randomNum); //borrar al final

function handleFunction() {
  runningGame();
}

function runningGame() {
  const userNum = parseInt(userNumber.value);
  if (userNum === randomNum) {
    clue.innerHTML = "Has ganado campeona!!!";
  }
  if (userNum > 100 || userNum < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100";
  }
  if (userNum > randomNum && userNum < 100) {
    clue.innerHTML = "Demasiado alto";
  }
  if (userNum < randomNum && userNum > 1) {
    clue.innerHTML = "Demasiado bajo";
  }
}

let counterNumber = 0;
function counter() {
  counterNumber += 1;
  attempts.innerHTML = "Número de intentos: " + counterNumber;
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  handleFunction();
  counter();
});
