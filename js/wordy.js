export default {
	loadWords,
	findWords
};

let words = [];

function loadWords(wordList) {
	words = [...wordList];
	return words.length;
}

function findWords(input) {
	let result = [];

	for (let word of words){
		if (input.length < word.length) {
			continue;
		}

		if (hasMatch(input, word)){
			result.push(word);
		}
	}

	return result;
}

function hasMatch(input, word) {
	const wordLetters = word.split('');

	for (const letter of wordLetters) {
		const idx = input.split('').indexOf(letter);
		if (idx === -1) return false;
		input = input.slice(0,idx) + input.slice(idx + 1);
	}

	return true;
}

