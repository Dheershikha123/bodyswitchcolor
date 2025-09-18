function one(){
    const username="reshu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//it will give error
      
    two()
}
one()

if(true){
    const username = "reshu"
    if(username==="reshu"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

function addone(num){
    return num+1
}

addone(5)// isko hum function se upar bhi likh skte h


const addTwo = function(num){
    return num+2

}

addTwo(5)//ye error dega agr hum isko addTwo function se phle 
//console.log(addTwo(5)) krenge kyuki isme humne function ko
//const addTwo m store kiya h  

