import { insertOper } from './helperFunctions';
import { input, numbers } from '../index';

export class FunctionOperations {
  constructor() {
  }

  sqrt(value) {
    return value ** (1 / 2);
  }

  sqr(value) {
    return value ** 2;
  }

  cbrt(value) {
    return value ** (1 / 3);
  }

  cbr(value) {
    return value ** 3;
  }

  plusMinus(value) {
    return 0 - value;
  }

  tenInPower(value) {
    return 10 ** value;
  }

  factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
      result *= i;
    }
    if (value.length > 2) {
      result = 'you can\'t use numbers larger than 2 digits';
    }
    return result;
  }
}

export const plus = () => {
  input.value += '+';
  insertOper(input.value);
};

export const mult = () => {
  input.value += '*';
  insertOper(input.value);
};

export const minus = () => {
  input.value += '-';
  insertOper(input.value);
};

export const divide = () => {
  input.value += '/';
  insertOper(input.value);
};

export const divideOnX = () => {
  input.value = '1/';
  insertOper(input.value);
};

export const percent = () => {
  input.value += '%';
  insertOper(input.value);
};

const functionOperations = new FunctionOperations();

export const plusMinus = (value) => {
  if (value === '0') {
    input.value = '0';
  }
  if (+value > 0 || +value < 0) {
    input.value = functionOperations.plusMinus(+value);
  }
};

export const sqrt = () => {
  if (+input.value < 0) {
    input.value = 'invalid operand';
  } else {
    input.value = functionOperations.sqrt(+input.value);
  }
};

export const cbrt = () => {
  let value;
  if (input.value < 0) {
    value = 0 - functionOperations.cbrt(+input.value.slice(1));
  } else {
    value = functionOperations.cbrt(+input.value);
  }
  if (+((value).toFixed() ** 3) === +(input.value)) {
    input.value = value.toFixed();
  } else {
    input.value = value;
  }
};

let isOperation;
const LS_KEY = 'memory';
const memoryError = 'there are no values in memory';


export const rememberValue = () => {
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
};

export const clearMemoryValue = () => {
  localStorage.setItem(LS_KEY, 'none');
};

export const addToMemoryValue = () => {
  if (localStorage.getItem((LS_KEY)) === 'none') {
    input.value = memoryError;
  } else {
    input.value = +input.value + +localStorage.getItem(LS_KEY);
  }
};

export const subtractFromMemoryValue = () => {
  if (localStorage.getItem((LS_KEY)) === 'none') {
    input.value = memoryError;
  } else {
    input.value = +input.value - +localStorage.getItem(LS_KEY);
  }
}

export const rootYfunction = (e) => {
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
  numbers.forEach((item) => item.removeEventListener('click', rootYfunction));
};

export const powerYvalue = (e) => {
  const yNumber = e.target.value;
  input.value = input.value.slice(0, input.value.length - 1) ** yNumber;
  numbers.forEach((item) => item.removeEventListener('click', powerYvalue));
};
