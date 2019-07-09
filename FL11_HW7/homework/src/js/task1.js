var email, password, newpassword, change, confirmpassword;
var passlength = 6;
email = prompt('Please enter your email');

if (!email) {
	alert('Canceled');
} else if (email.length<length) {
	alert("I don't know any emails having name length less than 6 symbols");
} else if (email === "user@gmail.com" || email === "admin@gmail.com" ) {
	password = prompt('Please enter your password');
	if (!password) {
		alert('Canceled');
	} else if (email === 'user@gmail.com' && password === 'UserPass' || 
			email === 'admin@gmail.com' && password === 'AdminPass') { 
		change = confirm('Do you want to change your password?');
		if (change) {
			password = prompt('Enter your old password');
			if (password) {
				if (email === 'user@gmail.com' && password === 'UserPass' || 
					email === 'admin@gmail.com' && password === 'AdminPass') {
					newpassword = prompt('Please enter new password');
					if (newpassword) {
						if (newpassword.length < passlength) {
							alert('Too short password');
						} else {
							confirmpassword = prompt('Confirm your password');
							if (confirmpassword) {
								if (confirmpassword === newpassword) {
									alert('You have successfully changed your password.');
								} else {
									alert('You wrote the wrong password.');
								}
							}
						}
					} else {
						alert('Canceled');
					}
				} else {
					alert('You wrote the wrong password');
				}
			} else {
				alert("Canceled"); 
			}
		} else {
			alert('You have failed the change');
		}

	} else {
		alert("Wrong password");
	}
}

