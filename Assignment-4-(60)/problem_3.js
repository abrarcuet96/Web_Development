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