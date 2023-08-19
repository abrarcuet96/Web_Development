document.getElementById('btn-bold').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    textField.style.fontWeight='bold';
})
document.getElementById('btn-italic').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    textField.style.fontStyle='italic';
})
document.getElementById('btn-underline').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    textField.style.textDecoration='underline';
})
document.getElementById('btn-left').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    textField.style.textAlign='left';
})
document.getElementById('btn-center').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    textField.style.textAlign='center';
})
document.getElementById('btn-justify').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    textField.style.textAlign='justify';
})
document.getElementById('btn-right').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    textField.style.textAlign='right';
})
document.getElementById('text-color').addEventListener('input',function(){
    const textField= document.getElementById('text-field');
    const colorPicker= document.getElementById('text-color');
    const selectColor=colorPicker.value;
    textField.style.color=selectColor;
})
document.getElementById('text-size').addEventListener('input',function(){
    const textField= document.getElementById('text-field');
    const sizePicker= document.getElementById('text-size');
    const selectSize=sizePicker.value + 'px';
    textField.style.fontSize=selectSize;
})
let isUppercase=false;
document.getElementById('btn-font-size').addEventListener('click',function(){
    const textField= document.getElementById('text-field');
    if(isUppercase){
        textField.style.textTransform='uppercase';
    }
    else{
        textField.style.textTransform='lowercase';
    }
    isUppercase= !isUppercase;
})

