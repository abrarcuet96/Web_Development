function cubeNumber(number) {
    if (typeof number != 'number') {
        return "please provide a number";
    }
    else {
        const result = Math.pow(number, 3);
        return result;
    }
}

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

function sortMaker(arr) {
    let comp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return "Invalid Input";
        }
        else {
            if (i == 0) {
                comp.push(arr[i]);
            }
            else {
                if (comp[0] < arr[i]) {
                    comp.unshift(arr[i]);
                }
                else if (comp[0] == arr[i]) {
                    return "equal";
                }
                else {
                    comp.push(arr[i]);
                }
            }
        }

    }
    return comp;
}

function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
    let output = street + "," + house + "," + society;
    return output;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length == 0) {
        return "EMPTY ARRAY!! please give an array with elements."
    }
    else {
        let sum = 0;
        for (let item of changeArray) {
            sum = sum + item;
        }
        if (sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
}