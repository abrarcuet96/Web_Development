const nayok={
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Opu','Raaz','Salman','Aamir'],
    movies: [{name:'no 1', year:2015},{name:'king khan', year:2013}],
    act: function(){
        console.log('i am king khan sakib khan');
    },
    car:{
        brand: 'tesla',
        price: 500000,
        made: 2025,
        manufacturer:{
            name: 'tesla',
            ceo: 'elon mask',
            country: 'USA'
        }
    }
}
console.log(nayok.act());
