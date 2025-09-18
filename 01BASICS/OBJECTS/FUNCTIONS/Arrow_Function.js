const user = {
    username : "reshu",
    price: 999,
    

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage()
user.username="chetan"
user.welcomeMessage()

console.log(this)//{} this is empty bracket

// in browser , this value is window

function chai(){
    let username="honey"//if we write this line and then print this.username it will print undefined
    console.log(this);
    console.log(this.username);

}
chai()

const chai2= () => {
    let username = "reshu"
    // console.log(this.username)//undefined
    console.log(this);//empty bracket
}
chai2()


