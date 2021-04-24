function isPalindrone(str) {
	let l = 0;
	let r = str.length - 1;
	while(r > l) {
		if(str[l++] != str[r--]) {
			console.log('String is not palindrome ' + str);
			return;
		}
	}
	console.log('String is palindrone ' + str);
}

isPalindrone('abba');
isPalindrone('cbdc');