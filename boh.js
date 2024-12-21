const schermo = document.getElementById('schermo');
let calcolo = '';
let ultimoInput = '';

const bottoni = {
  'cancella': 'C',
  'divisione': '/',
  'moltiplicazione': '*',
  'sottrazione': '-',
  'somma': '+',
  'uguale': '=',
  'zero': '0',
  'uno': '1',
  'due': '2',
  'tre': '3',
  'quattro': '4',
  'cinque': '5',
  'sei': '6',
  'sette': '7',
  'otto': '8',
  'nove': '9'
};


Object.keys(bottoni).forEach(id => {
  document.getElementById(id).addEventListener('click', () => gestisciInput(bottoni[id]));
});

function gestisciInput(valore) {
  if (valore === 'C') {
    calcolo = '';
    ultimoInput = '';
    schermo.textContent = '0';
  } else if (valore === '=') {
    try {
      if (calcolo && !isNaN(calcolo.slice(-1))) {
        calcolo = eval(calcolo).toString();
        schermo.textContent = calcolo;
        ultimoInput = calcolo; 
      }
    } catch (e) {
      schermo.textContent = 'Errore';
      calcolo = '';
    }
  } else {
    if (isOperatore(valore) && isOperatore(ultimoInput)) {
      calcolo = calcolo.slice(0, -1) + valore;
    } else if (valore === '/' && ultimoInput === '0') {
      schermo.textContent = 'Errore';
      calcolo = '';
      return;
    } else {
      calcolo += valore;
    }
    ultimoInput = valore;
    schermo.textContent = calcolo;
  }
}

function isOperatore(carattere) {
  return ['/', '*', '-', '+'].includes(carattere);
}
