const playGame = function(playerInput) {
   clearMessages();

   const printMessage = function(msg) {
   let div = document.createElement('div');
   div.innerHTML = msg;
   document.getElementById('messages').appendChild(div);
   }

   function clearMessages() {
      document.getElementById('messages').innerHTML = '';
   }

   const getMoveName = function(MoveId) {
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

   const displayResult = function(ComputerMove, PlayerMove) {
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
         printMessage('Remis');
      }
      else if (ComputerMove == 'kamień', 'papier', 'nożyce' && PlayerMove == 'nieznany ruch') {
         printMessage('Proszę wybrać istniejący ruch');
      }
   }
   // Computer move

   const randomNumber = Math.floor(Math.random() * 3 + 1);

   console.log('Wylosowana liczba to; ' + randomNumber);

   const ComputerMove = getMoveName(randomNumber);

   printMessage('Ruch komputera to: ' + ComputerMove);

   // Player move

   //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

   console.log('Gracz wpisał :' + playerInput);

   const PlayerMove = getMoveName(playerInput);

   printMessage('Mój ruch to: ' + PlayerMove);

   // Result of game
   displayResult(ComputerMove, PlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function() {
   playGame(1) });

document.getElementById('play-paper').addEventListener('click', function(){
   playGame(2) });

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3) });
