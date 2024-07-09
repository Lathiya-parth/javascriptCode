let n = prompt("Enter your Number:");

let arr=  [];

for(let i=1; i<=n; i++){
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res,cur)=>{
    return res + cur ;
})
console.log("sum=",sum);

let factorial = arr.reduce((res,cur)=>{
    return res * cur ;
})
console.log("factorial=",factorial);