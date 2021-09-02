let callback = (num) => {
    if(num === 0){
        console.log('The number is even');
    } else if (num % 2 === 0){
        console.log('the number is odd');
    } else {
        console.log('What is this?');
    }
}


for(i = 0; i <= 10; i++)
callback (i);