import {
  createFuncButtons, createOperButtons, createNumberButtons, information
} from './scripts/drawers';
import {
  FunctionOperations,
  plus,
  minus,
  mult,
  divide,
  percent,
  plusMinus,
  sqrt,
  cbrt,
  divideOnX,
  rememberValue,
  clearMemoryValue, addToMemoryValue, subtractFromMemoryValue, rootYfunction, powerYvalue
} from './scripts/functionOperations';
import './styles/index.css';
import './scripts/theme';
import {resultFunc} from './scripts/result';

// to render app
createFuncButtons();
createNumberButtons();
createOperButtons();

// all constants
export const input = document.querySelector('.input');

const btnEqual = document.querySelector('.equal');
const clearAll = document.querySelector('.clearAll');
const btnDel = document.querySelector('.del');
const infoBtn = document.querySelector('.info');

export const numbers = Array.from(document.querySelectorAll('.number'));

const btnSqrt = document.querySelector('.sqrt');
const btnCbrt = document.querySelector('.cbrt');
const btnRootY = document.querySelector('.root-of-y');
const btnPercent = document.querySelector('.percent');
const btnSqr = document.querySelector('.sqr');
const btnCbr = document.querySelector('.cbr');
const btnPowerY = document.querySelector('.power-of-y');
const btnPowerX = document.querySelector('.power-of-ten');
const btnDivideOnX = document.querySelector('.divide-on-x');
const btnFact = document.querySelector('.factorial');

const btnPlusMinus = document.querySelector('.change');
const btnPlus = document.querySelector('.plus');
const btnMultiplication = document.querySelector('.multiplication');
const btnMinus = document.querySelector('.minus');
const btnDivide = document.querySelector('.divide');

const mr = document.querySelector('.mr');
const mc = document.querySelector('.mc');
const mPlus = document.querySelector('.mPlus');
const mMinus = document.querySelector('.mMinus');

const functionOperations = new FunctionOperations();

clearAll.addEventListener('click', () => {
  input.value = '0';
});

btnDel.addEventListener('click', () => {
  input.value = input.value.substring(0, input.value.length - 1);
});

btnEqual.addEventListener('click', resultFunc);

infoBtn.addEventListener('click', () => {
  alert(information);
})

numbers.map((item) => {
  item.addEventListener('click', (e) => {
    if (input.value === '0') {
      input.value = e.target.value;
    } else {
      input.value += e.target.value;
    }
  });
});

btnPlus.addEventListener('click', () => {
  plus();
});

btnMinus.addEventListener('click', () => {
  minus();
});

btnMultiplication.addEventListener('click', () => {
  mult();
});

btnDivide.addEventListener('click', () => {
  divide();
});

btnPercent.addEventListener('click', () => {
  percent();
});

btnSqrt.addEventListener('click', () => {
  sqrt();
});

btnCbrt.addEventListener('click', () => {
  cbrt();
});

btnDivideOnX.addEventListener('click', () => {
  divideOnX();
});

btnPlusMinus.addEventListener('click', () => {
  plusMinus(+(input.value));
});

btnSqr.addEventListener('click', () => {
  input.value = functionOperations.sqr(input.value);
});

btnCbr.addEventListener('click', () => {
  input.value = functionOperations.cbr(input.value);
});

btnPowerX.addEventListener('click', () => {
  input.value = functionOperations.tenInPower(input.value);
});

btnFact.addEventListener('click', () => {
  input.value = functionOperations.factorial(input.value);
});

btnPowerY.addEventListener('click', () => {
  powerYvalue;
  numbers.forEach((item) => item.addEventListener('click', powerYvalue));
});

btnRootY.addEventListener('click', () => {
  rootYfunction;
  numbers.forEach((item) => item.addEventListener('click', rootYfunction));
});

mr.addEventListener('click', () => {
  rememberValue();
});

mc.addEventListener('click', () => {
  clearMemoryValue();
});

mPlus.addEventListener('click', () => {
  addToMemoryValue();
});

mMinus.addEventListener('click', () => {
  subtractFromMemoryValue();
});


