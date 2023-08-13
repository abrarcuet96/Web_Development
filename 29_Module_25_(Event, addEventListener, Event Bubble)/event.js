//option:1--> ddirectly set on the html element.
//<button onclick="console.log(65)">another click me</button>
//option:2[will be used]
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
//option:3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
//option:3 another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
//option:4:addEventListener
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
//option:4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});
//option:5 *****Final*****[important-->will use this frequently]
document.getElementById('make-golden-rod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
});
