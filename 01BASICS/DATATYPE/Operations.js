let value = 4
let negvalue = -value;
// console.log(negvalue)
//2*3 -> multiply , 2**3 -> 2 ki power 3
let str1="hello"
let str2="chetan"
let str3=str1+str2
console.log(str3)
console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)
console.log(2+2+"1")
console.log(+true)//1
//console.log(+true)//wrong
console.log(+"")//0
console.log(+"34abc")//NaN
console.log(typeof(+"34abc"))//NaN


/* comparison
*/
console.log("2">1)
console.log("02">1)
console.log("01">"1")//false
console.log("1">"001")//true
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false
console.log(undefined>=0)//false
console.log(undefined<=0)//false

// === is strictcheck means it check string and int
// if both datatype are not same it return false
//otherwise it check value if equal then true 