// Your code here
const colors = [
  'Red',
  'Blue',
  'Green',
  'DodgerBlue'
];
const CELL_COUNT = 10;

let currentColor = 'Red';

const selector = document.querySelector('select');

selector.addEventListener('change', ()=> {
  currentColor = selector.value;
});

const html = colors.map( color => `<option>${ color }</option>`).join('');

selector.innerHTML = html;


const table = document.querySelector('table');

const addRow = ()=> {
  const tr = document.createElement('tr');
  for(let i = 0; i < CELL_COUNT; i++){
    const td = document.createElement('td');
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

const addRowButton = document.querySelector('#add-row');
addRowButton.addEventListener('click', addRow);

addRow();
addRow();
addRow();

table.addEventListener('click', (ev)=> {
  if(ev.target.tagName === 'TD'){
    const style = ev.target.style;
    const cellColor = style.backgroundColor; 
    style.backgroundColor = cellColor.toLowerCase() === currentColor.toLowerCase()
      ? '' : currentColor;
  }
});
