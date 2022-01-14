function printMessage(msg) {
   let div = document.createElement('div');
   div.innerHTML = msg;
   document.getElementById('messages').appendChild(div);
}

function clearMessages() {
   document.getElementById('messages').innerHTML = '';
}

let computerMove = 'kamień';

let playerMove = 'papier';

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek to: ' + calculation);

let randomNumber = Math.floor(calculation);

printMessage('Cały ułamek to: ' + randomNumber);

