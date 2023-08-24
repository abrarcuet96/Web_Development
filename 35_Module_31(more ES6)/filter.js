// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const players = [75, 65, 67, 72, 55, 59];
// const selected=players.filter(p=>p>70);
const selected=players.filter(p=>p%2===1);
console.log(selected);

const friends=['tom','john','michel','abrar'];
const oddFriends=friends.filter(friend=>friend.length>4);
console.log(oddFriends);