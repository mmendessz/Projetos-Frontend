const display = document.querySelector("#display p");

const number = document.querySelectorAll(".num");
const operation = document.querySelectorAll(".ops");

const calc = document.querySelector(".result");
const clear = document.querySelector(".clear");

let numAtual = "";
let primeiroNum = "";
let ops = "";

let resultado = 0;

let resetNext = false;

number.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (resetNext) {
      numAtual = "";
      resetNext = false;
    }

    numAtual += e.target.textContent;
    display.innerText = numAtual;
  });
});

operation.forEach((op) => {
  op.addEventListener("click", (e) => {
    primeiroNum = numAtual;
    ops = e.target.textContent;
    numAtual = "";
  });
});

calc.addEventListener("click", () => {
  if (!ops || numAtual === "") return;

  let num1 = Number(primeiroNum);
  let num2 = Number(numAtual);

  if (ops === "+") {
    resultado = num1 + num2;
  } else if (ops === "-") {
    resultado = num1 - num2;
  } else if (ops === "*") {
    resultado = num1 * num2;
  } else if (ops === "/") {
    if (num2 === 0) {
      display.innerText = "Erro";
      numAtual = "";
      primeiroNum = "";
      ops = "";
      return;
    }
    resultado = num1 / num2;
  }

  numAtual = resultado;
  display.innerText = resultado;

  primeiroNum = "";
  ops = "";

  resetNext = true;
});

clear.addEventListener("click", () => {
  numAtual = "";
  primeiroNum = "";
  ops = "";
  resultado = 0;
  resultNext = false;

  display.innerText = "0";
});
