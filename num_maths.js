const number = 100;
console.log(number.toFixed());


const otherNumber  =  123.897;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));


const BigNumber = 1000000;
console.log(BigNumber.toLocaleString());  ///    US TYPE
console.log(BigNumber.toLocaleString('en-IN'));   /// INDIAN TYPE

//++++++++++++++++++++ MATHS +++++++++++++++++++++++

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1 )) + min);