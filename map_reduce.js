const myNums= [1,2,3,4,5,6,7,8,9,10]
//filter methode

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);
                                                         
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);


const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);