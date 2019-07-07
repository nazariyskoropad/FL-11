const a = Number( prompt('Please enter a') );
const b = Number( prompt('Please enter b') );
const c = Number( prompt('Please enter c') );
if (a+b>c && a+c>b && c+b>a) {
	if (a===b && b===c){	
			alert('Equivalent triangle'); 
	}	else if (a===b || b===c || a===c) {	
			alert('Isosceles triangle');
	}	else{ 
			alert('Normal triangle'); 
		} 
}	else{
		alert('Triangle doesn’t exist');
	}
