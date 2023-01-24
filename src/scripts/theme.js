const btn = document.querySelector('.switch');
const root = document.querySelector(':root');

const themes = {
  default: {
    '--bg-color': '#D6D6FF',
    '--display-color': '#AFAFFF',
    '--btn-color-numbers': '#7070FF',
    '--btn-color-func': '#0000DE',
    '--btn-color-oper': '#00007F',
    '--text': '#ECECFF',
    '--btn-theme': '#42AAFF',
  },
  dark: {
    '--bg-color': '#6e6368',
    '--display-color': '#A5A5A5',
    '--btn-color-numbers': '#5b6669',
    '--btn-color-func': '#37404a',
    '--btn-color-oper': '#4f4f4f',
    '--text': '#cfcfcf',
    '--btn-theme': '#B5B8B1',
  },
};

let isDark = JSON.parse(localStorage.getItem('isDark'));

btn.addEventListener('click', btnHandler);

if (!localStorage.getItem('isDark')) {
  localStorage.setItem('isDark', false);
}
changeTheme(isDark);

function btnHandler(e) {
  e.preventDefault();
  isDark = !isDark;
  localStorage.setItem('isDark', isDark);
  changeTheme(isDark);
}

function changeTheme(isDark) {
  const theme = isDark ? 'dark' : 'default';
  Object.entries(themes[theme]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}