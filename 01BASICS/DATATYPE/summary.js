//primitive datatypes = (value type)
// non-primitive datatypes = (reference type)
// 7 primitive datatypes
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. symbol
// 7. bigint
// non-primitive datatype
// 1. object
// 2. array
// 3. function
// 4. date
// 5. anything else which is not primitive is non-primitive datatype
// 6. special datatypes - NaN , Infinity , -Infinity
// NaN - not a number
// Infinity - infinity


/*Copilot Answer


JavaScript is a dynamically typed language.

This means:

Type Checking at Runtime: The type of a variable is determined during execution, not at compile time.


Copy code
let value = 42; // Initially a number
value = "Hello"; // Later reassigned to a string
No Explicit Type Declaration: Variables can hold any type of data without specifying the type explicitly.

Flexibility: While this provides flexibility, it can also lead to runtime errors if types are not handled carefully.

For stricter type checking, you can use TypeScript, which is a statically typed superset of JavaScript */

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)//false
console.log(typeof(id))//symbol
const bignumber = 3880872869685829919n
console.log(typeof(bignumber))//bigint
const heroes =["iron man" , "hulk", "captain america"];
let myObj ={
    name: "reshu",
    age:20,

}

const myFunction = function(){
    console.log("hllo world");
}
console.log(typeof(myFunction))

let myyt ="newdotcom"
let anothername= myyt
anothername="newdotcom2"
console.log(myyt)
console.log(anothername)

let user = {
    email :"user@gmail.com",//objects
    upi:"23@okaxis"
}

let usertwo=user
usertwo.email ="reshu@gmail.com"
console.log(user.email)
console.log(usertwo.email)
//in funcutions value changes but individual do not
// change

