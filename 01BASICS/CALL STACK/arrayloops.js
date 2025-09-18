// for of loop 
// const arr = [ 1,2,3,45]
// for(const iterator of arr)
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
const greeting = "hello world!";
for(const greet of greeting){
    console.log(greet); // it separate char 
}

// MAP

const map = new Map()
map.set('IN', "India")
map.set('USA' , "United States of America")
map.set('Fr', "France")//here for map for...in cannot be used
map.set('IN' , "India");
// map only contain unique location not repeated 

console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}

const myObject={
    'game1':'NFS',
    'game2' : 'spiderman'
}


for(const [key, value] of Object.entries(myObject)){
    console.log(key, ':-', value); // myObject is now iterable using Object.entries()
}

// for objects we use for inloop 

const myObject2={
    js:'javascript',
    cpp:"c++",
    rb:"ruby",
    swift: "swift by apple"
}
for(const key in myObject2){
    console.log(key);
}

// Use for...in to get the index (for arrays) or key (for objects).
// Use for...of to get the value directly (for arrays, strings, etc.).
// When used on an object, it prints the property keys (like js, cpp, etc.).
// When used on an array, it prints the indices (0, 1, etc.).

const programming=["js", "rb" , "py" , "java" , "cpp"]
for(const key in programming){
    console.log(key);
}