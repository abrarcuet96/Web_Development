const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 35000 },
    { id: 4, name: 'mac', price: 165000 },
];
// has some properties, method
class Product {
    country = 'bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking abput ${talk}`)
    }
}
const lenovo = new Product('le le lenovo');
// console.log(lenovo);
// lenovo.speak('oba kita kou');

class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;
    }
    lecture(){
        console.log('sir is teaching mathametics');
    }
}
const tapan=new Teacher('topon sir','physics');
const rashid=new Teacher('rashid sir','english');
console.log(tapan);
console.log(rashid);