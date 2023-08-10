function cubeNumber(number) {
    if (typeof number != 'number') {
        return "please provide a number";
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
}