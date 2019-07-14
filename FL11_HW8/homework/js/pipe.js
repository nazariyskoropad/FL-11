function pipe (x) {
	for (var i = 1; i< arguments.length; i++) {
		var func = arguments[i];
		x = func(x);
	}
	return x;
}

function addOne (x) {
	return x+1;
}

pipe (12, addOne, addOne, addOne);

