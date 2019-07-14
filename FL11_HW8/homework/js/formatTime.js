function isInteger (a) {
	return a%1 === 0;
}

function formatTime (a) {
	if (isInteger(a)) {
		var days = 0, hours = 0, minutes = 0;
		while (a >= 60 * 24) {
		days++;
		a -= 60 * 24;
		}
		while (a >= 60) {
			hours++;
			a -= 60;
		}
		minutes = a;

		return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s).";
	} else {
		return false;
	}
}

formatTime (120);