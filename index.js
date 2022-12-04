import {
  createFuncButtons, createOperButtons, createNumberButtons, information
} from './src/scripts/drawers';
// eslint-disable-next-line import/no-cycle
import {
  FunctionOperations, plus, minus, mult, divide, percent, plusMinus, sqrt, cbrt, divideOnX,
} from './src/scripts/functionOperations';
import './src/styles/index.css';
import './src/scripts/theme';
// eslint-disable-next-line import/no-cycle
import { resultFunc } from './src/scripts/result';

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

const numbers = Array.from(document.querySelectorAll('.number'));

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

// eslint-disable-next-line array-callback-return
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
  plusMinus(Number(input.value));
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
  const powerYvalue = (e) => {
    const yNumber = e.target.value;
    input.value = input.value.slice(0, input.value.length - 1) ** yNumber;
    numbers.forEach((item) => item.removeEventListener('click', powerYvalue));
  };
  numbers.forEach((item) => item.addEventListener('click', powerYvalue));
});

btnRootY.addEventListener('click', () => {
  const analyzeValue = (e) => {
    const yNumber = e.target.value;
    if (yNumber % 2 === 1) {
      if (+input.value < 0) {
        input.value = 0 - ((0 - input.value.slice(0, input.value.length - 1)) ** (1 / yNumber));
      } else {
        input.value = (input.value.slice(0, input.value.length - 1) ** (1 / yNumber));
      }
    } else {
      input.value = input.value.slice(0, input.value.length - 1) ** (1 / yNumber);
    }
    numbers.forEach((item) => item.removeEventListener('click', analyzeValue));
  };
  numbers.forEach((item) => item.addEventListener('click', analyzeValue));
});

let isOperation;
const LS_KEY = 'memory';
const memoryError = 'there are no values in memory';

mr.addEventListener('click', () => {
  if (localStorage.getItem((LS_KEY)) === 'none') {
    localStorage.setItem(LS_KEY, input.value);
    if (!isOperation) {
      input.value = +localStorage.getItem(LS_KEY);
    } else {
      input.value += +localStorage.getItem(LS_KEY);
    }
  } else {
    input.value = localStorage.getItem(LS_KEY);
  }
});

mc.addEventListener('click', () => {
  localStorage.setItem(LS_KEY, 'none');
});

mPlus.addEventListener('click', () => {
  if (localStorage.getItem((LS_KEY)) === 'none') {
    input.value = memoryError;
  } else {
    input.value = +input.value + +localStorage.getItem(LS_KEY);
  }
});

mMinus.addEventListener('click', () => {
  if (localStorage.getItem((LS_KEY)) === 'none') {
    input.value = memoryError;
  } else {
    input.value = +input.value - +localStorage.getItem(LS_KEY);
  }
});


