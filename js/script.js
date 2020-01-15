// Campo Minato

var listaNumeriPc = [];
var numeroUtente;
var esito;
var punteggio = 0;
// Il computer deve generare 16 numeri casuali da 1 a 100.
for (var i=0; i<16; i++) {
  listaNumeriPc.push(getRandomNumer(1, 100));
}
console.log(listaNumeriPc);
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
for (var i=0; i<84; i++) {
  numeroUtente = parseInt(prompt('inserisci un numero da 1 a 100'));
  esito = comparazione(listaNumeriPc, numeroUtente);
  // La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
  if (esito == true) {
    i = 84;
    alert('hai perso');
  }else if (punteggio == 84) {
    alert('che culo hai vinto');
    i = 84;
  }
  // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
  else {
    punteggio++;
  }
}
alert('il tuo punteggio e\'' + punteggio);
console.log(punteggio);
                                                    
// FUNZIONE
function comparazione(lista, numero) {
  for (var i=0; i < lista.length; i++) {
    if (numero == lista[i]) {
      return true;
    }
    else {
      return false;
    }
  }
}

function getRandomNumer(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}
