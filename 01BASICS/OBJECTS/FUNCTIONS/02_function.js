//e.g, while shopping and billing we don't have any idea how many items are there for which price needs to be added

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

const user={//creation of object
    username: "Reshu",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username : "hello",
    price : 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


