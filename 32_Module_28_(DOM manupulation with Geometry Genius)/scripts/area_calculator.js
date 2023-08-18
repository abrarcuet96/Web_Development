function calculateTriangleArea() {
    // get triangle base:
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // get triangle height:
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // area:
    const area = 0.5 * base * height;
    // show triangle area:
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('triangle', area);

}
function calculateRectangleArea() {
    // get triangle base:
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // get triangle height:
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // area:
    const area = width * length;
    // show triangle area:
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('rectangle', area);

}
// using reusable function:
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('paralellogram',area);
}
function calculateEllipseArea(){
    const majorRadius=getInputValue('ellipse-major-radius');
    const minorRadius=getInputValue('ellipse-minor-radius');
    const area= 3.14*majorRadius*minorRadius;
    const areaTwoDecimal=area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
    addToCalculationEntry('ellipse', area);
}
// reusable function:
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add to calculation entry:
/* 
1.get the element where you to get the dynamic html.
2.create an element you to add.
3.if needed add some class.
4.set inner html. it could be dynamic template string.
5. append the created element as a child of the parent.
 */
function addToCalculationEntry(areaType, area){
    const calculationEntry=document.getElementById('calculation-entry');
    const count=calculationEntry.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    // p.innerHTML=areaType+ ' ' + area;
    p.innerHTML=`${count + 1} ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-small btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}