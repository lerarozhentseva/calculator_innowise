export const createNumberButtons = () => {
  const btns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '=', 'del'];
  const container = document.querySelector('.num_buttons');

  btns.forEach((elem) => {
    const buttons = document.createElement('button');
    buttons.setAttribute('class', 'number');
    buttons.innerHTML = elem;
    buttons.value = `${elem}`;
    container.appendChild(buttons);

    if (elem === '=') {
      buttons.setAttribute('class', 'equal');
    } else if (elem === 'del') {
      buttons.setAttribute('class', 'del');
    }
  });
};

export const createFuncButtons = () => {
  const container = document.querySelector('.func_buttons');

  const btns = [
    { value: 'AC', class: 'clearAll' },
    { value: 'x!', class: 'factorial' },
    { value: '&#8730;x', class: 'sqrt' },
    { value: '&#8731;x', class: 'cbrt' },
    { value: 'M-', class: 'mMinus' },
    { value: 'MR', class: 'mr' },
    { value: 'MC', class: 'mc' },
    { value: 'M+', class: 'mPlus' },
    { value: 'ʸ√x', class: 'root-of-y' },
    { value: '%', class: 'percent' },
    { value: '+/-', class: 'change' },
    { value: 'x<sup>2</sup>', class: 'sqr' },
    { value: 'x<sup>3</sup>', class: 'cbr' },
    { value: 'x<sup>y</sup>', class: 'power-of-y' },
    { value: '10<sup>x</sup>', class: 'power-of-ten' },
    { value: '1/x', class: 'divide-on-x' },
  ];
  btns.forEach((elem) => {
    const buttons = document.createElement('button');
    buttons.setAttribute('class', `${elem.class} + functions`);
    buttons.innerHTML = elem.value;
    container.appendChild(buttons);
  });
};

export const createOperButtons = () => {
  const container = document.querySelector('.oper_buttons');

  const btns = [
    { value: '*', class: 'multiplication' },
    { value: '/', class: 'divide' },
    { value: '+', class: 'plus' },
    { value: '-', class: 'minus' },
  ];
  btns.forEach((item) => {
    const buttons = document.createElement('button');
    buttons.setAttribute('class', ` ${item.class} + operation`);
    buttons.innerHTML = item.value;
    container.appendChild(buttons);
  });
};

export const information = `
  HOW TO USE CALCULATOR?
  
  1. memory buttons:
  MR-remember value (memory value)
  M(+)-add value your value to value from memory
  M(-)-substract from your value the value from memory
  MC-clear memory
  
  2. root, power, factorial buttons:
  First enter a number in the input line, then click on the button
  
  3. 1/x button: 
  First click on the button, then enter a number
  
  REMEMBER! you can't divide by ZERO
`
