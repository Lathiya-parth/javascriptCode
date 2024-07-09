const map = new Map()
map.set('IN' , "INDIA")
map.set('US' , "UNITED STATE OF AMERICA")
map.set('FR' , "FRANCE")

// console.log(map);

for(const [key,value] of map){
    console.log(key, ":-",value);
}


//+++++++++++++++++++++++//

const coding = ["js","ruby","python","cpp","java"]

// coding.forEach( function (val){
//     console.log(val);
// })



// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


coding.forEach( (item, index, arr) => {
     console.log(item, index, arr);
})

//-----------------------------------

const myCoding = [
        {
            LanguageName : "java",
            LanguageFileName : "js",
        },
        {
            LanguageName : "python",
            LanguageFileName : "ps",
        },
        {
            LanguageName : "javaScript",
            LanguageFileName : "js",
        },
]

myCoding.forEach( (item) => {
    console.log(item.LanguageName);
})