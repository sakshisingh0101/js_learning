//concatenate 
const firstName="Sakshi "
const lastName="Singh"
console.log(firstName[0])
console.log(firstName + " "+ lastName)//one way of concatenation
console.log(`My name is ${firstName} ${lastName} `)//modern way of concatenation
//declare string 
// let str=new String('heloo')
//string is object here 

//key:value pair
//0:h
//1:e
//2:l
//3:e
//4:e
// console.log(str[1]);
// console.log(typeof firstName);
// console.log(str.toUpperCase())
// console.log(str)
// console.log(str.charAt(2));
// console.log(str.indexOf('o'));
// console.log(str.substring(0,2));
// console.log(str.slice(-8,4));
let name="sakshi-singh"
console.log(name);     
console.log(name.trim());
console.log(name.replace('-'," "));
// console.log(name.split);
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

