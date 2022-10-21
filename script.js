const input = document.getElementById('range');
const output = document.getElementById('price');
const pageviews = document.getElementById('pageviews');
let arrayInitialPrices = [8, 12, 16, 24, 36];
let arrayPageviews = ['10K','50K','100K','500K','1M'];
let discountNumber = Number((document.getElementById('discount')).innerHTML);
inputValue = input.value;

/*To add more values, just change input 'max' on index.html 
and increase array inicial prices and its correspondent array pageviews.

To change the discount tax, just change number on span #discount in HTML*/


 //inicial input range (without toggle first activation)
input.addEventListener('input', function (){
    inputValue = input.value;
    output.innerText = (arrayInitialPrices[inputValue]).toFixed(2);
    pageviews.innerText = arrayPageviews[inputValue];
});


//control to toggle checked
const toggle = document.getElementById('toggle')
toggle.addEventListener('change', function (){

    //percentage discount
    
    const discountPercentage = discountNumber/100;

    //array of calculated discount (in money)
    const discount = arrayInitialPrices.map(item => item * discountPercentage);

    //creating array of final prices with discount (according to lenght of inicial prices)
    let arrayInitialPricesLenght = arrayInitialPrices.length;
    let arrayLowerPrices = Array(arrayInitialPricesLenght).fill(0);

    for(let i in arrayLowerPrices){
        arrayLowerPrices[i] = arrayInitialPrices[i] - discount[i];
    }
    
    //changing prices according to toggle (checked or not)
    if (toggle.checked === false){
    output.innerText = (arrayInitialPrices[inputValue]).toFixed(2);
    } else {
    output.innerText = (arrayLowerPrices[inputValue]).toFixed(2);
    }
    
    //add input Event Listener for continuous check verification while changing input
    input.addEventListener('input', function (){
        inputValue = input.value;
        
        if (toggle.checked === false){
                output.innerText = (arrayInitialPrices[inputValue]).toFixed(2);
        } else {
            output.innerText = (arrayLowerPrices[inputValue]).toFixed(2);
        }
    });     
});


//progress bar control

input.addEventListener('input', function (){

    let maxInput = Number(input.max);
    let indexOfIncreease = 100/maxInput;
    let increaseNumber = indexOfIncreease*inputValue;
    let color = 'linear-gradient(to right, hsl(174, 77%, 80%) '+increaseNumber+'%,  hsl(224, 65%, 95%)'+increaseNumber+'%)';
    input.style.background = color;
});





//Media Queries

const discountParagraph = document.querySelector('.discount');


//All queries changes with JS
function mediaQuerie767(){
    if (window.innerWidth < 767) {
        discountParagraph.innerText = '-'+discountNumber+'%';
    } else {
        discountParagraph.innerText = '-'+discountNumber+'% discount';
    }
};

//Checking window size when 1st loaded
document.addEventListener('DOMContentLoaded', mediaQuerie767);

//Checking window size when resize
window.onresize = mediaQuerie767;