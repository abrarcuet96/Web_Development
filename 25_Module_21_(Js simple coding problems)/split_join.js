//split():
const lyrics='tumi bondhu kala pakhi,ami jeno ki,bosonto kale tomai bolte pari ni';
const parts=lyrics.split(' ');
console.log(parts);
const sentences=lyrics.split(',');
console.log(sentences);

//slice():
const partial = lyrics.slice(5, 8);
console.log(partial);

//substring():
const partial2=lyrics.substring(5,8);
console.log(partial2);

//join():
const lines=[
    'tumi bondhu kala pakhi',
    'ami jeno ki',
    'bosonto kale tomai bolte pari ni'
];
const newSong=lines.join('; ')
console.log(newSong);