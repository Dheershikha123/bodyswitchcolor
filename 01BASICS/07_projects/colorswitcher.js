const buttons=document.querySelectorAll('.button')//here we have selected all the buttons
const body = document.querySelector("body")//here we have selected body
buttons.forEach(button=>{//here we are iterating over each button and each button attributes
    console.log(button);
    button.addEventListener('click',function(e){
             console.log(e);
             console.log(e.target)
             if(e.target.id==='grey'){
                body.style.backgroundColor= e.target.id;//or we can simple give'red
             }
             if(e.target.id==='hotpink'){
                body.style.backgroundColor= e.target.id;//or we can simple give'red
             }
             if(e.target.id==='dodgerblue'){
                body.style.backgroundColor= e.target.id;//or we can simple give'red
             }
             if(e.target.id==='burlywood'){
                body.style.backgroundColor= e.target.id;//or we can simple give'red
             }
    })
    
});