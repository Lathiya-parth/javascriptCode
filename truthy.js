const useremail = "parthjoi5@wqdq.ai"

if(useremail){
    console.log("hello parth");
}
else{
    console.log("hello lathiya");
}


// falsy values

// false, 0 ,-0,BigInt, 0n, "",null,undefined,NaN

//truthy values

//"0",'false'," ",[],{},function(){}


const emptyObject= {}

if(Object.keys(emptyObject).length === 0){    //(object.keys) --- e value ne object mathi 
    console.log("my name is king");           //                  array ma transer kare
}


//nullish coalescing operator  (??)  null  undefined

let val1;
// val1 = 10 ?? 20
// val1 = null ?? 20
// val1 = undefined ?? 20
val1 = 5 ?? 10 ?? 20
console.log(val1);
 


//terniary operator 

// condition ? true : false 

const score = 1000;
score <= 600 ? console.log("more then")  :  console.log("less then");