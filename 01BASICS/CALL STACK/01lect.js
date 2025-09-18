// first global execution context is always there and also function execution context and eval execution context three execution context
// in memory creation phase -> storage is provided for variables but execution is not happen
// execution phase -> 
// control flow 
const isLoggedIn= true;
if(2==="2"){//triple equal checks datatype as well
    console.log("Logged");
}
else{
    console.log("Not executed")

}

const balance=1000;
// if(balance>500) console.log("test") , console.log("test2"); //not a good practice
const month=5;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
        default:
            console.log("no option");
            break;
}

const userEmail="reshu@gmail";
const user2="";

if(userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}

// falsy values
//  false , 0, -0, BigInt 0n, "" , null ,undefined, NaN

// truthy value
//  "0" , 'false' , " " , [] , {}, function(){}

if(userEmail.length===0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator(??): null undefined

let vall;
// vall=5??10;
// vall = null??10
// vall=undefined??15
// vall= null??10??20;//jo bhi value phle assign hogi vo aayega
console.log(vall);

// ternary operator
// condition?true:false


