const input = document.getElementById('range');
const output = document.getElementById('price');
const pageviews = document.getElementById('pageviews');
const arrayInitialPrices = ['8', '12', '16', '24', '36'];
const arrayPageviews = ['10K','50K','100K','500K','1M',]


input.addEventListener('input', function (){
    inputValue = input.value;

    if(inputValue==1){
        output.innerText = arrayInitialPrices[0];
        pageviews.innerText = arrayPageviews[0];
    } else if(inputValue==2){
        output.innerText = arrayInitialPrices[1];
        pageviews.innerText = arrayPageviews[1];
    } else if(inputValue==3){
        output.innerText = arrayInitialPrices[2];
        pageviews.innerText = arrayPageviews[2];
    } else if(inputValue==4){
        output.innerText = arrayInitialPrices[3];
        pageviews.innerText = arrayPageviews[3];
    } else if(inputValue==5){
        output.innerText = arrayInitialPrices[4];
        pageviews.innerText = arrayPageviews[4];
    }
});

const toggle = document.getElementById('toggle');


toggle.addEventListener('change', function (){
    
    const outputValue = output.innerText;
    const price = Number(outputValue);
    const discount = price*0.25;
    const lowerPrice = price - discount;
    console.log(toggle.checked);
    if (toggle.checked === true){
    output.innerText = lowerPrice;
    } else { 
    output.innerText = arrayInitialPrices[0];
    }
});









/*- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

onchange="showVal(this.value)"
*/