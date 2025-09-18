//singleton
//object literals
//Object.create is another method of creating constructor

const mySym = Symbol("key1")//symbol is a unique identifier
const JsUser = {
    "full name" : "Reshu Janmejay",
    //mySym : "myvalue",
    [mySym] : "myValue", // it will be used when we donot use square braket in console.log
    name : "Reshu",
    age : 20,
    location : "India",
    email : "reshujanmejay@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])//another method of declaring
// // console.log(JsUser.full name)//it gives error because whitespace not allowed
// // console.log(JsUser."full name")//it also gives error because of this
// console.log(JsUser["full name"])//this is the correct way of declaring 
// console.log(JsUser.mySym)//it will give undefined because it is a symbol to fetch the exact value which is given in global variable above 
// //we need to declare it in square bracket inside the console.log or can be inside curly brackets
// console.log(JsUser[mySym])//this is the correct way of declaring symbol value
// console.log(typeof JsUser)
// //it will give object

// console.log(JsUser[mySym])//it have to give key1 as an answer but it will give myValue because symbol is unique identifier

// JsUser.email = "reshu@google.com"
// Object.freeze(JsUser)
// JsUser.email = "reshu@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting)//it will give [Function(anonyms)]
console.log(JsUser.greeting())//it will give Hello Js User
//it will give undefined because there is no return statement in greeting function
//if we want to return something then we have to use return statement

JsUser.greeting2 = function(){
    console.log("Hello Js User")
    return "greeting function called"
}
console.log(JsUser.greeting2())//it will give undefined because there is no return statement in greeting function
//if we want to return something then we have to use return statement

JsUser.greeting3 = function(){
    console.log(`Hello JS User, ${this.name}`)//use backtick here 

}

console.log(JsUser.greeting3())