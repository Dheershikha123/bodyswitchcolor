//Dates

let myDate = new Date()
console.log(myDate)//it gives current date and time
console.log(myDate.toString())
console.log(myDate.toDateString())//gives only date
console.log(myDate.toISOString())//gives date in iso format
console.log(myDate.toTimeString())//gives only time
console.log(myDate.toUTCString())//gives date in utc format
console.log(typeof myDate)//myDate is an object
let myCreatedDate = new Date(2024,0,25)
let myCreatedDate2 = new Date(2024,0,25,7)
let myCreatedDate3 = new Date("2024-01-25")
console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)//gives time in milliseconds from 1 jan 1970 to now
let myTimeStamp2 = new Date("1971-01-01")
console.log(myTimeStamp2.getTime())//gives time in milliseconds from 1 jan 1970 to the given date
// 
let newDate = new Date()
console.log(newDate.getDay())//gives day in number 0-6
console.log(newDate.getDate())//gives date in number 1-31

newDate.toString('default',{
    weekday : "long",
})