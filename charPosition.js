function charPosition(string) {
	var letters = {};

	for (var i = 0; i < string.length; i++) {
		if (letters[string.charAt(i)]) {
            letters[string.charAt(i)].count++;
            letters[string.charAt(i)].pos.push(i);
		} else {
            letters[string.charAt(i)] = {};
            letters[string.charAt(i)].count = 1;
            letters[string.charAt(i)].pos = [i];
		}
	}
	
	console.log(letters);
}

charPosition('abcdefffggg');