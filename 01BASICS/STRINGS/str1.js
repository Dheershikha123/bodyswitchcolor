const name="Chetan"
const repoCount=50
// console.log(name + repoCount + "amazing work")
console.log(`Hello my name is ${name} and my rep count is ${repoCount}`)

const gameName = new String("CHESS") 
// const gameName = new String('CHESS') 

console.log(gameName)
console.log(gameName[0])
console.log(gameName._proto_)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))//konsa char present h
console.log(gameName.indexOf('E'))//konse index pr h
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-8,4)//only here neg value possible
console.log(anotherString)

const newStringOne = "   helloworld  "
// console.log(newStringOne).trim()//remove extra spaces
console.log(newStringOne.trim())

const url = "https://newdata.com/newdata.html"
url.replace('com','in')
console.log(url.replace('com','in'))
console.log(url.includes('data'))//true if present else false
// console.log(gameName.split('-'))