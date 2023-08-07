function isVowel(s) {
    if (typeof s !== 'string') {
        return 'please provide a string';
    }
    else {
        let vowels = 0;
        let consonants = 0;
        let spaces = 0;
        for (let a of s.toLowerCase()) {

            if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u') {
                vowels++;
            }
            else if (a != ' ') {
                consonants++;
            }
            else {
                spaces++;
            }
        }
        const obj = {
            vowel: vowels,
            consonant: consonants,
            space: spaces
        }
        return obj;
    }

}
const sentence = 'I am a good boy';
console.log(isVowel(sentence));