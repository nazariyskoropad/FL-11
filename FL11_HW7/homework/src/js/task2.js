var start = confirm('Do you want to play a game?');
var number;
var userTry;
var low = 0;
var up = 8;
var game = true
var prize = 100;
var balance = 0;
var quit;
var win = true;
var j = [1, 2, 4]
if (start) {
	while (game) {
		number = Math.floor(Math.random() * (up - low + 1));
		var attempts = 3;
		var current = 3;
		for (var i=0; i<attempts; i++) {
			userTry = Number(prompt('Enter a number from ' + low + ' to ' + up + 
				' of pocket on which the ball could land\nYour balance is '
				+ balance + '$. \nPossible prize is ' + prize/j[i] + '$'));
			if (userTry) {
				if (userTry === number) {
					balance += prize/j[i];
					quit = confirm('Congratulation, you won! Your prize is: ' + prize + '$. Do you want to continue?');
					if (!quit) {
						game = false;
					}
					break;
				} else {
					current--;
					alert('Incorrect! '+ current +' attempts left');
				}	
			} else {
				alert('canceled');
				game = false;
				break;
			}
		} if (current === 0){
				quit = confirm('Do you want to play again?');
				if (quit) {
					win = false;
				} else {
					game = false;
				}
			}
		if (win) {
			up+=4;
			prize*=2;
		}
	}
	alert('Thank you for your participation. Your prize is:' + balance + '$')
} else {
	alert('You did not become a billionaire, but can.');
}