const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10 )

// const newNums = myNumbers.map( (num) => {
//     return num + 10
// } )

const newNums = myNumbers.map( (num) => num * 10)
                         .map( (num) => num + 1)
                         .filter( (num) => num > 40)

console.log(newNums);


//++++++++++ REDUCE ++++++++++++++++++

const myNums = [1,2,3]

// const total = myNums.reduce (function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)

const total = myNums.reduce( (acc,curraval) =>  acc + curraval, 0)

console.log(total);




const shoppingCart = [
    {
        itemName : "js course",
        price : 1000,
    },

    {
        itemName : "python course",
        price : 999,
    },
    {
        itemName : "java course",
        price : 1200,
    },
]

const totalPrice = shoppingCart.reduce( (acc,item) => acc + item.price , 0)

console.log(totalPrice);