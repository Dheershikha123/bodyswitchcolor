const form=document.querySelector('form')
//this usecase will give you empty values if you don't enter anything
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (height === '' || height < 0 || isNaN(height)) {
        alert('Please enter a valid height');
        return;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert('Please enter a valid weight');
        return;
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;
    }
});