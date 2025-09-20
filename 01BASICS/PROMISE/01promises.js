//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 
// the promise object represent the eventual completion (or failure) of an asynchronous operation and its resulting  value 
// a promise is in one of these states;
// pending: initial state, neither fulfilled nor rejected
// fulfilled: meaning that the operation was completed successfully
// rejected: meaning that the operation failed
// fetch('https://somthjing.com').then().catch().finally()//fetch returns a promise
//.then() method is called when the promise is fulfilled
//.catch() method is called when the promise is rejected
//.finally() method is called when the promise is settled (either fulfilled or rejected)
const Promise1 = new Promise(function(resolve, reject){
    //   do an async task;
    // db call, read a file, cryptography , network request
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();//if the async task is completed
    },1000)//here we take 1 second to complete the async task
    // reject();//if the async task is failed
})

Promise1.then(function(){
    console.log('promise is fulfilled');
}).catch(function(error){
    console.log(error);
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is completed');
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 is resolved");
}).then(function(){
    console.log("Async task 2 resolved");
}).catch(function(error){
    console.log(error);
});

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'dheer', email:'dheer@google.com'})//here we use resolve to pass parameters in .then to justify that this promised ids fulfilled
    },1000)
})

promiseThree.then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"reshu",password:"123"})
        }else{
            reject('ERROR:Something went wrong');
            
        }
    },1000)
})
  promiseFour
    .then((user) => {
        return user.username;
    })
    .catch((error) => {
        console.log(error);//here catch is used for error handling
        return 'default user';
    })
    .then((result) => {
        console.log(result); // Will print username or 'default user'
    })
    .finally(() => console.log('The promise is either resolved or rejected'));

// console.log(username);


const promiseFive = new Promise(function(resolve,reject){
        setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript",password:"124"})
        }else{
            reject('ERROR:Js went wrong');
            
        }
    },1000)
})

async function consumePromiseFive(){//it is a function 
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     // fetch () is used for promise
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/')
//     // const data =  response.json() //it is used to convert the response into json format so it can take some time that's why error is showing
//     // console.log(data);//it will show promise pending
//     console.log(response)//it will show the response of the api in json format
//     const data = await response.json()//it will wait for the response to be converted into json format
//     console.log(data);//it will show the data in json format
//     }
//     catch(error){
//         console.log("ERROR");
//     }
// }



// getAllUsers();

// thenable ->then is used in chain then phir then and so on

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);                                                    
})
.catch((error)=>console.log(error))