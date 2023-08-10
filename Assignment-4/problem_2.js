function matchFinder(string1, string2) {
    console.log(typeof string1, typeof string2);
    if (typeof string1 != 'string' || typeof string2 != 'string') {
        return "please give both string input";
    }
    else {
        if (string1.includes(string2)) {
            return true;
        }
        return false;
    }
}