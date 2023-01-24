import { input } from '../index';

export const resultFunc = () => {
  const arrFromInputValue = input.value.split('');
  const functionOperation = arrFromInputValue.reduce((acc, item) => {
    if (item !== '.') {
      if (Number.isNaN(+item)) {
        acc = item;
        return acc;
      }
    }
    return acc;
  });
  const array = input.value.split(functionOperation);
  switch (functionOperation) {
    case '-':
      input.value = +array[0] - +array[1];
      break;
    case '+':
      input.value = +array[0] + +array[1];
      break;
    case '*':
      input.value = +array[0] * +array[1];
      break;
    case '/':
    case '1/':
      if (array[1] === '0') {
        input.value = 'you can\'t divide by 0';
      } else {
        input.value = +array[0] / +array[1];
      }
      break;
    case '%':
      if (array[0] && array[1]) {
        input.value = (+array[0] / 100) * +array[1];
      } else {
        input.value = (+array[0] / 100);
      }
      break;
    default:
      input.value = '0';
  }
};