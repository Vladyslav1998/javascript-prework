// functions

function printMessage(msg) {
   let div = document.createElement('div');
   div.innerHTML = msg;
   document.getElementById('messages').appendChild(div);
}

function clearMessages() {
   document.getElementById('messages').innerHTML = '';
}

function getMoveName(MoveId) {
   if (MoveId == 1) {
      return 'kamień';
   }

   else if (MoveId == 2) {
      return 'papier';
   }

   else if (MoveId == 3) {
      return 'nożyce';
   }

   else {
      printMessage('Nie znam ruchu o id ' + MoveId + '.');
      return 'nieznany ruch';
   }
}

function displayResult(ComputerMove, PlayerMove) {
   console.log('moves:',ComputerMove, PlayerMove);

   if (ComputerMove == 'kamień' && PlayerMove == 'kamień') {
      printMessage('Remis');
   }
   else if (ComputerMove == 'kamień' && PlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
   }
   else if (ComputerMove == 'kamień' && PlayerMove == 'nożyce') {
      printMessage('Przegrałeś');
   }
   else if (ComputerMove == 'papier' && PlayerMove == 'kamień') {
      printMessage('Przegrałeś');
   }
   else if (ComputerMove == 'papier' && PlayerMove == 'papier') {
      printMessage('Remis');
   }
   else if (ComputerMove == 'papier' && PlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz');
   }
   else if (ComputerMove == 'nożyce' && PlayerMove == 'kamień') {
      printMessage('Ty wygrywasz');
   }
   else if (ComputerMove == 'nożyce' && PlayerMove == 'papier') {
      printMessage('Przegrałeś');
   }
   else if (ComputerMove == 'nożyce' && PlayerMove == 'nożyce') {
      printMessage('remis');
   }
   else if (ComputerMove == 'kamień', 'papier', 'nożyce' && PlayerMove == 'nieznany ruch') {
      printMessage('Proszę wybrać istniejący ruch');
   }
}
// Computer move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to; ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);

printMessage('Ruch komputera to: ' + ComputerMove);

// Player move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał :' + playerInput);

let PlayerMove = getMoveName(playerInput);

printMessage('Mój ruch to: ' + PlayerMove);

// Result of game
displayResult(ComputerMove, PlayerMove);