const input = document.getElementById('range');
const output = document.getElementById('price');
const pageviews = document.getElementById('pageviews');
const arrayInitialPrices = ['8', '12', '16', '24', '36'];
const arrayPageviews = ['10K','50K','100K','500K','1M',];



//input range

input.addEventListener('input', function (){
    inputValue = input.value;
        output.innerText = arrayInitialPrices[inputValue];
        pageviews.innerText = arrayPageviews[inputValue];
    });




//toggle checked

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', function (){
    
    const outputValue = output.innerText;
    const price = Number(outputValue);
    const discount = price*0.25;
    const lowerPrice = price - discount;
    inputValue = input.value;
    console.log(toggle.checked);

    if (toggle.checked === true){
    output.innerText = lowerPrice;
    } else { 
    output.innerText = arrayInitialPrices[inputValue];
    }
});









/*- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

onchange="showVal(this.value)"
*/