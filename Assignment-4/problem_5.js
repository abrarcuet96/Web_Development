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