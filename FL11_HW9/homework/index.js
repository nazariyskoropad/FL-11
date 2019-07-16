const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]

function getNumbers (str) {
	var arr = [];
	var j = 0;
	for(var i=0; i<str.length; i++) { 
		if (!isNaN(str[i])) {
			arr[j] = parseInt(str[i]);
			j++;
		}
	}
	return arr;
}

function findTypes() {
	let object = {};
	for (let i = 0; i < arguments.length; i++) {
		if (object[typeof arguments[i]]) {
			object[typeof arguments[i]]++;
		} else {
			object[typeof arguments[i]] = 1;
		}
	}
	return object;
}

function executeforEach(arr, func) {
	for(let i = 0; i<arr.length; i++) {
		func(arr[i]);
	}
}

function mapArray(arr, func){
    let mass = [];
    executeforEach(arr, function (transform) {
        mass.push(func(transform));
    });
    return mass;
}

mapArray([2, 5, 8], function(el) { 
	return el + 3 
});

function filterArray(arr, func) {
	let mass = [];
	executeforEach(arr, function (transform) {
		if (func(transform)) {
		mass.push(transform);
		}
	})
	return mass;
}

filterArray([2, 5, 8], function(el) { 
	return el > 3;
})

function showFormattedDate(date) {
    let options = { month: 'short', day: '2-digit'};
    const formatDate = date.toLocaleDateString('en-us', options);
    return '\'' + 'Date: ' + formatDate + ' ' + date.getFullYear() + '\'';
  }

function canConvertToDate(date) {
	return new Date(date).toString() !== 'Invalid Date';
}

function daysBetween(date1, date2) {
	let seconds = 1000;
	let minutes = 3600;
	let hours = 24;
	return Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (seconds * minutes * hours));
}

function getAmountOfAdultPeople(person) {
	let count = 0;
    let adultAge = 18;
    let yearDays = 365;
    for (let i = 0; i < person.length; i++) {
        let days = daysBetween(new Date(person[i].birthday), new Date());
        if (days / yearDays >= adultAge) {
            count++;
        }
    }
    return count;
}

function keys (obj) {
	let arr = [];
	for (let i in obj) {
		if (obj.hasOwnProperty(i)){
			arr.push(i);
		}
	}
	return arr;
}

function values(obj) {
	let arr = [];
	for(let i in obj) {
		if (obj.hasOwnProperty(i)) {
			arr.push(obj[i]);
		}
	}
	return arr;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3}) 