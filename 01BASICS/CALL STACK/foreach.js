const coding=["js","cpp","ruby","java","python"]
coding.forEach(function (item){
    console.log(item);
})
coding.forEach((item)=> {
    console.log(item);
})
function printMe(item){
    console.log(item);
}
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
const mycode=[
    {
        languageName:"javascript",
        languageFileName:"js"
    }
]

mycode.forEach((item)=>{
    console.log(item.languageName);
})