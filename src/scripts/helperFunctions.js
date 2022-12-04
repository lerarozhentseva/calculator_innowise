import { input } from '../../index';

export const insertOper = (value) => {
  const elementsFromInput = value.split('').reduce((acc, item) => {
    if (item === '-' || item === '+' || item === '*' || item === '/' || item === '%' || item === '1/') {
      acc += 1;
    }
    return acc;
  }, 0);
  if (elementsFromInput > 1) {
    // eslint-disable-next-line array-callback-return,consistent-return
    const signs = value.split('').map((item) => {
      if (item !== '.') {
        if (Number.isNaN(+item)) {
          return item;
        }
      }
    }).filter((elem) => elem !== undefined);

    const array = value.split(signs[0])
      // eslint-disable-next-line array-callback-return,consistent-return
      .map((item) => {
        // eslint-disable-next-line no-param-reassign
        item = String(parseFloat(item));
        if (!Number.isNaN(+item)) {
          return item;
        }
      });

    switch (signs[0]) {
      case '-':
        input.value = +(array[0]) - +(array[1]) + signs[1];
        break;
      case '+':
        input.value = +(array[0]) + +(array[1]) + signs[1];
        break;
      case '*':
        input.value = (+(array[0]) * +(array[1])) + signs[1];
        break;
      case '/':
      case '1/':
        if (+(array[1]) === 0) {
          input.value = 'you can\'t divide by 0';
        } else {
          input.value = (+(array[0]) / +(array[1])) + signs[1];
        }
        break;
      case '%':
        if (array[0] && array[1]) {
          input.value = (+array[0] / 100) * +array[1] + signs[1];
        } else {
          input.value = (+array[0] / 100) + signs[1];
        }
        break;
      default:
        input.value = '0';
    }
  }
};
