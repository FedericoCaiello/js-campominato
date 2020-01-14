// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var listaArray = [];
var listaArrayTentativi = [];
var trovaNumero = false;
var tentativi = 84;


while (listaArray.length < 16) {
  var randomNumber = getRandomNumer(1, 100);
  if (listaArray.includes(randomNumber) == false) {
    listaArray.push(randomNumber);
  }
}
function checkBomb(listaArrayDaGuardare, numeroDaGuardare) {
  for (var i = 0; i < listaArrayDaGuardare.lenght; i++){
    if (numeroDaGuardare == listaArrayDaGuardare[i]) {
      return true;
    }
  }
  return false;
}

for (var j = 1; j <=16; j++) {
  var utenteNumeri = parseInt(prompt('inserisci un numero da 1 a 100'));
  console.log(utenteNumeri);
}
function getRandomNumer(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}
