const myName='Mehedy';
const age=26;
const address='rajshahi';
const wifeName='katappa';
const sentence='amar nam '+myName+'. amar boyos '+age+'. amar bari '+address+'. amar wife er nam '+wifeName+'.';
console.log(sentence);

const subjects=['bengali','english','math'];
const newSentence=
`Amar nam ${myName} 
Amar boyos ${age} 
Amar subjects ${subjects.map(subject=>subject).join(' ')}
Amar bari ${address} 
Amar wife er nam ${wifeName}`;
console.log(newSentence);