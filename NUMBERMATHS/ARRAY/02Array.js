const marvel_heroes = ["thor","Ironman","spiderman"];
 const dc = ["superman","batman","flash"];

// marvel_heroes.push(dc);//it adds the dc array into the marvel array as a single element

// console.log(marvel_heroes);
// console.log(marvel_heroes.length)// it returns 4 because  dc array becomes an element in marvel_heroes array

// console.log(marvel_heroes[3][1]);//it prints batman because dc array is at 3rd index and batman is at 1st index inside dc array

// console.log(marvel_heroes.indexOf("thor"))
// console.log(marvel_heroes.indexOf("superman"))//it returns -1 because superman is not present in the marvel_heroes array whole dc is act as an element 

// marvel_heroes.concat(dc)
// console.log(marvel_heroes)//it does not modify the original array 

const all_heroes = marvel_heroes.concat(dc);
console.log(all_heroes) // it creates a new array by merging both the arrays and store it in another array only then it concats the array

const all_new_heroes = [...marvel_heroes,...dc]
console.log(all_new_heroes)//it also creates a new array and it  is more efficient as 
//it can be used to merge more than two arrays and also can be used to add new elements in between the arrays
//e.g const all_new_heroes = [...marvel_heroes,...dc]
// console.log(all_new_heroes)

const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(2)// it removes the nested array and makes it a single array
console.log(real_another_array)
// flatten method takes an argument which is the depth of the nested array
// e.g if the depth is 1 then it will remove only one level of nested array
// if the depth is 2 then it will remove two levels of nested array and so on
// if the depth is not provided then it will remove only one level of nested array by default

console.log(Array.isArray("Reshu"))
console.log(Array.from("Reshu"))
console.log(Array.from({name: "Reshu"}))//interesting it gives us empty array as it is unable to convert object reshu into array
console.log(Array.from({length:5}))//it gives us an array of 5 undefined elements
console.log(Array.from({length:5},(elem, index)=> index + 1))//it gives us an array of 5 elements with values from 1 to 5


let score1 =50;
let score2= 60
let score3 = 70
console.log(Array.of(score1,score2,score3))


//homework
//learn and implement more about array.is array, array.from etc

