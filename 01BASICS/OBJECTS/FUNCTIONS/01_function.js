function sayMyName(){
    console.log("H")
    console.log("O")
    console.log("N")
    console.log("E")
    console.log("Y")
}

// sayMyName()
// number1,number2 these are called parameters
// function addTwoNumbers(number1,number2){//here in js we don't need to give datatype of number1 and number 2
//           console.log(number1+number2);//7+3=10
// }
// const result=addTwoNumbers(7,3)// arguments
// console.log("result:",result);//undefined

function addTwoNumbers(number1, number2){
    let result= number1+number2
     console.log("Reshu")//ye print hoga
    return result
    console.log("Reshu")//result k baad kuch print nhi hoga
}

const result= addTwoNumbers(3,5)

console.log("Result", result);

function loginUserMessage(username){//here username is undefined
    return `&{username} just logged in`
}

console.log(loginUserMessage())

function loginUserMessage2(username){//here username is undefined
    if(username===undefined){
        console.log("Please enter a username");
        return//is return k baad neeche nhi jayega agr ye return nhi hota to iske neeche vala return execute hota
    }   
    return `&{username} just logged in`
}

console.log(loginUserMessage2())

function loginUser(username="hello"){//here username is undefined
    if(!username){
        console.log("Please enter a username");
        return//is return k baad neeche nhi jayega agr ye return nhi hota to iske neeche vala return execute hota
    }   
    return `&{username} just logged in`
}
console.log(loginUser())