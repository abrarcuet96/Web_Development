function isLGSeven(x) {
    if (typeof x !== 'number') {
        return 'please, provide me a number';
    }
    else {
        const differ = x - 7;
        if (differ < 7) {
            return differ;
        }
        else {
            return x * 2;
        }
    }
}
console.log(isLGSeven('hello'));
console.log(isLGSeven(-15));
console.log(isLGSeven(22));
console.log(isLGSeven(7));