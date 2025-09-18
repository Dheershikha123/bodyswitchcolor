// first method

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// second method

(function chai(){
    // named iife
    console.log('DB connected');
}) ();//here if we don't use semicolon so it will give error for the below one

// third method

( () => {
    // unnamed iife
    console.log(`DB CONNECTED TWO`);
}) ();//they are called iife
// when we start next function arrow function just after iife semicolon needs to be used

((name)=> {
    console.log(`DB CONNECTED THREE ${name}`);
}) ('hitesh')