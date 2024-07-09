const myArr = [1,2,3,4,5,6,7];

console.log(myArr);


//slice and splice different

console.log("A" , myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

const myn2 =  myArr.splice(1,3);
console.log("B",myArr);
console.log(myn2);