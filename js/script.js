// Campo Minato

var listaNumeriPc = [];
var numeroUtente = [];
var punteggio = 0;
var numberPrompt;
// numeri minimi e massimi della base di calcolo
var numMinChek;
var numMaxChek;
var message = 'Hai vinto';
// tentativi di difficoltà
var difficultGame = 0;
// Il computer deve generare 16 numeri casuali da 1 a 100.
for (var i=0; i<16; i++) {
  listaNumeriPc.push(getRandomNumer(1, 100));
}
console.log(listaNumeriPc);
do {
  var difficult = parseInt(prompt('con che grado di difficoltà vuoi giocare? da 0 a 2:'));
  difficultGame++
} while (checkRangeNumber(0, 2, difficult) == false && difficultGame < 3);

if (difficult == 0) {
  numberPrompt= 84;
  numMinChek = 1;
  numMaxChek = 100;
} else if (difficult == 1){
  numberPrompt= 64;
  numMinChek = 1;
  numMaxChek = 80;
} else if (difficult == 2) {
  numberPrompt= 34;
  numMinChek = 1;
  numMaxChek = 50;
}
console.log('difficolta',difficult);
console.log('volte',numberPrompt);
console.log('base minima',numMinChek);
console.log('base massima',numMaxChek);
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
var findBomb = false;
while (numeroUtente.length < numberPrompt && findBomb == false) {
  var numeroUtenteGioco = false;
  do{
    var numeroUtenteGioco = parseInt(prompt('inserisci un numero da 1 a 100'));
    console.log('numero inserito' + checkRangeNumber(numMinChek, numMaxChek, numeroUtenteGioco));
  } while(checkRangeNumber(numMinChek, numMaxChek, numeroUtenteGioco) == false)
  // La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
  if(comparazione(numeroUtente, numeroUtenteGioco) == false) {
    numeroUtente.push(numeroUtenteGioco);
    if(comparazione(listaNumeriPc, numeroUtenteGioco) == true){
      message = 'hai perso';
      findBomb = true;
    }
     // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    else {
      punteggio++;
    }
  }
}
console.log(numeroUtente);
console.log(message + ' ' + punteggio);
                                      
// FUNZIONE
function comparazione(lista, numero) {
  var i = 0;
  var resultato = false;
  while (i < lista.length && resultato == false) {
    if (lista[i] == numero) {
      resultato = true;
    }
    i++;
  }
  return resultato;
}

function getRandomNumer(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}

//funzione che controlla che un numero sia in un certo range
function checkRangeNumber(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
