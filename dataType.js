// primitive

// type 7: string ,number,boolean,null,undefined,symbol,bigInt

const score = "564";
const bigScore = 1358.325;

const isLoggesdId = false;

const outsideTemp = null;
let isloggen;

const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id ===  anotherId);

const bigInt =  12587648723165n;

//reference (Non primitive)

// array ,object ,functions

const heros = ["hanuman","shaktiman","karan"];

let myobj ={
    name:"parth",
    age :19,
}


const myFunction = function(){
    console.log("hello world");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack and heap

//stack(primitive) and heap(non-primitive)

let name = "parthLathiya";
let anotherName = "princegoti";

let myanotherName = anotherName;
myanotherName = "chaiandcode"

console.log(anotherName);
console.log(myanotherName);


const person1 = {
    name:"parth",
    Id:"parth546@out",
}

const person2 = person1;

person2.Id = "jwiugdhi"

console.log(person1);
console.log(person2);