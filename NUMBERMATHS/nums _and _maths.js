const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())//isme number string m convert 
// ho jaega 
const otherNumber = 1234.456
console.log(otherNumber.toFixed(2))//ye decimal k baad 2 digits tk le jaega

console.log(otherNumber.toPrecision(3))// ye total 3 digits tk lekr jaega

const hundreds = 1000000
console.log(hundreds.toLocaleString())//in us format commas are assigned
console.log(hundreds.toLocaleString('en-IN'))// in indian format commas are assigned
// can be single or double commas

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))//it rounds off the number
console.log(Math.ceil(4.3))//find highest integer
console.log(Math.floor(4.7))// find lowest integer
console.log(Math.min(4,5,6,7,8,-1))//find the min ele

console.log(Math.random())//gives random no between 0-1
console.log(Math.random()*10)//give random no between 0-10

console.log(Math.floor(Math.random()*10))//gives random no. between 0-9
console.log(Math.floor(Math.random()*10)+1)//gives random no. between 1-10

const min =10;
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)//gives random no. between 10-20