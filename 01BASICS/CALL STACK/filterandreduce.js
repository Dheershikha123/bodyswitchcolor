// const coding=["js","cpp","java","py"]
// const values=coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(values);//ye value vapas nhi krta

// const mynums=[1,2,3,4,5,6,7,8]
//  const newnums=mynums.filter((num)=>num>5)//agr single line m h without curly bracket return nhi likhna
// // but agr curly bracket presenthote to return likhna padta
// console.log(newnums);

// const newnumb=[1,4,5,6,7,8,9]
// const print=newnumb.filter((num)=>{
//     return num>4
// })
// console.log(print)

// // by forEach loop
// const num_print=[]
// newnumb.forEach((num)=>{
//     if(num>4){
//         num_print.push(num)
//     }
// })
// console.log(num_print)

const books=[
    {title:'Book One', genre:'Fiction', publish:1981,edition:2004},
    {title:'Book Two', genre:'Non-Fiction', publish:1992,edition:2008},
    {title:'Book Three', genre:'History', publish:1999,edition:2007},
    {title:'Book Four', genre:'Non-Fiction', publish:1989,edition:2005},
    {title:'Book Five', genre:'Science', publish:2009,edition:2003},
    {title:'Book Six', genre:'Fiction', publish:1997,edition:2009},
    {title:'Book Seven', genre:'History', publish:1986,edition:2009},
    {title:'Book Eight', genre:'Fiction', publish:1997,edition:20010},
    {title:'Book Nine', genre:'Non-Fiction', publish:1982,edition:2014},
    {title:'Book Ten', genre:'Science', publish:1995,edition:2025},
]
// const userBook = books.filter((bk) => bk.genre==='History')
// const userB1ook=books.filter((bk)=> {bk.publish>=2009})
// console.log(userBook)

// const mynum=[1,2,3,4,5,6,7]
// const newnum=mynum.map((num)=>{return num+10})
// console.log(newnum)


// for chaining
const mynum = [1,2,3,4,5,6,7];
const newnum2 = mynum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40); // filter m true condition pr value aati h

console.log(newnum2);

        // reduce function


        // const mynumb=[1,2,3,4,5,6]
        // const mytotal= mynumb.reduce(function(acc,currval){
        //     console.log(`acc:${acc} and currval:${currval}`);
        //     return acc+currval
        // }, 0)//0 se start hoga accumulator acc

        // console.log(mytotal)


        // by arrow funcn

        const total=mynum.reduce((acc,curr)=> acc+curr , 0)
        console.log(total)

