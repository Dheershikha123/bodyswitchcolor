const myArr = [0,1,2,3,4,5];
console.log(myArr);//it print the whole array
console.log(myArr[0]);//it prints the 0th index ele of array
//arrays in js follow shallow copy
//Shallow copy -> it is a copy of an object whose properties share the same references (point to the same underlying
//values) as those of the source
// Deep copy -> it is a copy of an object that does not share references with the source object

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[4])//it prints the 4th index ele of array;

//Array methods

myArr.push(49)
console.log(myArr);//it adds 49 at the end of array

myArr.unshift(99)//it adds 99 at the starting of array
console.log(myArr)

myArr.pop()
console.log(myArr)//it removrd the last ele of array

myArr.push(4);
console.log(myArr)//it adds 4 at the end of array                                                                     

myArr.shift()
console.log(myArr)//it removes the first ele of array

myArr.splice(2,1)//it removes the ele at 2nd index
console.log(myArr)

console.log(myArr.includes(4))//it checks if 4 is present in the array or not and returns the boolean value
console.log(myArr)
console.log(myArr.indexOf(9))//it returns the index of an element which present
// in the array otherwise returns -1

const new2Arr = myArr2.join();//here u can pass any sepatrator in the array
console.log(myArr2)


const newArr = myArr2.slice(1,4)//it returns the array from index 1 to index 3
console.log(newArr)
console.log(myArr2)//it does not modifies the original array


console.log("A",myArr)

const myn1 = myArr.slice(1,3)//1 se 3 tk ka print krna h but 3 vali ko print nhi krega only 1 and 2 ko

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)//ye 1 se 3 tk sare ele ko print krega
console.log("C",myArr);
console.log(myn2)