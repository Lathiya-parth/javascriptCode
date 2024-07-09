let items = [250, 645, 300, 900, 50];


/** first  **/

// let i= 0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer ${items[i]}`);
//     i++;
// }


/** second **/
for(let i=0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);