const input = document.getElementById('range');
const output = document.getElementById('price');
const pageviews = document.getElementById('pageviews');
const arrayInitialPrices = [8, 12, 16, 24, 36];
const arrayPageviews = ['10K','50K','100K','500K','1M',];
inputValue = input.value;




 //input range

 input.addEventListener('input', function (){
    inputValue = input.value;
        output.innerText = arrayInitialPrices[inputValue];
        pageviews.innerText = arrayPageviews[inputValue];
    });

//verificar como colocar nome na função change e chamar ela dentro do listener do input


//toggle checked

const toggle = document.getElementById('toggle')
toggle.addEventListener('change', function (){

    const discount = arrayInitialPrices.map(item => item * 0.25);
    const arrayLowerPrices = arrayInitialPrices.map(item => item - discount)

    console.log(arrayInitialPrices);
    console.log(discount);
    console.log(arrayLowerPrices);

    
    console.log(toggle.checked);

    

        if (toggle.checked === false){
        output.innerText = arrayInitialPrices[inputValue];
        } else {
        output.innerText = arrayLowerPrices[inputValue];
        }
        
    });



/*- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

onchange="showVal(this.value)"
*/