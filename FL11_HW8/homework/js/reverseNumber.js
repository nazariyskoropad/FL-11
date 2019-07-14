function reverseNumbers (a) {
	var b=0;
	while (a) {
		b = b * 10 + a % 10;
		a = parseInt(a / 10);
	}
	return b;
}

reverseNumbers (123);