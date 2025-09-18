
// const tinderUser = new Object()
// const tinderUser2 ={}
// console.log(tinderUser)
// console.log(tinderUser2)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dheershikha",
            lastname: "Janmejay"
        }
    }
};

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {obj1, obj2};
console.log(obj3);

const obj4 = Object.assign(obj1, obj2); // copy the values of all of the enumerable own properties from one or more source objects to a target object. return the target object
// const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

const users = [
    {
        id: 1,
        email: "dheer@google.com"
    },
    {
        name: "reshu",
        email: "dheer@microsoft.com"
    }
];

console.log(users[1].email);
console.log(users[0].email);
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))

console.log(Object.entries(regularUser))
console.log(regularUser.hasOwnProperty(''))

const course ={
    coursename: "Js tutorial",
    price:"999",
    courseInstructor:"reshu"
}

const {courseInstructor:instructor} =course //here courseinstructor new name is instructor 
//it is often used in react

console.log(instructor)

//here we haven't give name to object it is treated as JSON
//here both name and chetan and all the stuff inside it treated as strings so should be enclosed in " "

// {
//     name:"chetan",
//     coursename: "js in hindi",
//     price:"free"
// }

// { //correct way
//     "name":"chetan",
//     "coursename": "js in hindi",
//     "price":"free"
// }
