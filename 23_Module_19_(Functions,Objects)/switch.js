const color='blue';
if(color=='green'){
    console.log('you are a green boy');
}
else if(color=='blue'){
    console.log('you are a blue boy');
}
else if(color=='red'){
    console.log('you are a red boy');
}
else if(color=='white'){
    console.log('you are a white boy');
}
else{
    console.log('you are a discolor boy');
}

// or use switch:
switch(color){
    case 'green':
        console.log('you are a green boy');
        break;
    case 'blue':
        console.log('you are a blue boy');
        break;
    case 'white':
        console.log('you are a white boy');
        break;
    case 'red':
        console.log('you are a red boy');
        break;
    default:
        console.log('you are a discolor boy');
}