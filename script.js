const input = document.getElementById('range');
const output = document.getElementById('price');
const pageviews = document.getElementById('pageviews');
let arrayInitialPrices = [8, 12, 16, 24, 36];
let arrayPageviews = ['10K','50K','100K','500K','1M'];
inputValue = input.value;

/*To add more values, just change input 'max' on index.html 
and increase array inicial prices and array pageviews*/




 //inicial input range (without toggle first activation)
input.addEventListener('input', function (){
    inputValue = input.value;
    output.innerText = arrayInitialPrices[inputValue];
    pageviews.innerText = arrayPageviews[inputValue];
});


//control to toggle checked
const toggle = document.getElementById('toggle')
toggle.addEventListener('change', function (){

    //percentage discount
    const discountPercentage = 0.25;

    //array of calculated discount (in money)
    const discount = arrayInitialPrices.map(item => item * discountPercentage);

    //creating array of final prices with discount (according to lenght of inicial prices)
    let arrayInitialPricesLenght = arrayInitialPrices.length;
    let arrayLowerPrices = Array(arrayInitialPricesLenght).fill(0);

    for(let i in arrayLowerPrices){
        arrayLowerPrices[i] = arrayInitialPrices[i] - discount[i];
        console.log(arrayLowerPrices);
    }
    
    //changing prices according to toggle (checked or not)
    if (toggle.checked === false){
    output.innerText = arrayInitialPrices[inputValue];
    } else {
    output.innerText = arrayLowerPrices[inputValue];
    }
    
    //add input Event Listener for continuous check verification while changing input
    input.addEventListener('input', function (){
        inputValue = input.value;
        output.innerText = arrayInitialPrices[inputValue];
        if (toggle.checked === false){
                output.innerText = arrayInitialPrices[inputValue];
        } else {
            output.innerText = arrayLowerPrices[inputValue];
        }
    });
        
});


