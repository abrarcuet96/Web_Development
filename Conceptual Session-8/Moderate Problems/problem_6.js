function gemsToDiamond(x, y, z) {
    if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
        return 'please, provide me valid number input';
    }
    else if(x<0 || y<0 || z<0){
        return 'please, provide me all positive numbers';
    }
    else{
        const friend_1=21;
        const friend_2=32;
        const friend_3=43;
        const total=(x*friend_1)+(y*friend_2)+(z*friend_3);
        if(total>2000){
            return total-2000;
        }
        else{
            return total;
        }
    }
}
console.log(gemsToDiamond(1,1,1));