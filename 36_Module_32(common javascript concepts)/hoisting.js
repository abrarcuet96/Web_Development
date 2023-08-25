print5();//hosted
print10();//will not work

for (var i = 0; i < 5; i++) {
    console.log(i); //1.2.3.4
}
console.log('outside', i); //5
// use let instead of var.


function print5() {
    console.log('inside print5()', 5);
}

const print10 = function () {
    console.log('inside print10()', print10);
}