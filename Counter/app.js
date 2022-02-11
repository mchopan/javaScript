let count = 0;

const increase = document.querySelector('.btn_inc');
const decrease = document.querySelector('.btn_dec');
const reset = document.querySelector('.btn_reset');
const value = document.getElementById('value');


increase.addEventListener('click', function(){
    count++
    value.textContent = count;
})

decrease.addEventListener('click', function(){
    count--;
    value.textContent = count;
})

reset.addEventListener('click', function(){
    count = 0;
    value.textContent = count;
})
