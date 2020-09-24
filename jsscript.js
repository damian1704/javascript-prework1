function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	var playerMove;
	playerMove = 'kamień';
	printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
	playerMove = 'papier';
	printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

