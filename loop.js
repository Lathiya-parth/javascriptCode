for (let i = 1; i <= 10; i++) {
    
    console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <=10; j++) {
    
        // console.log("Inner loop value: ${j} and outer line: ${i}"); 
    
        console.log(i + '*' + j + '=' + i*j );
    }
}


