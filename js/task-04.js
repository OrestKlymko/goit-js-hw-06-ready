/*jshint esversion: 6 */

const increment = document.querySelector('[data-action="increment"]');
 increment.addEventListener('click',onClickIncrease);
 
 const counterEl = document.querySelector('#value');


const decrement = document.querySelector('[data-action="decrement"]');
 decrement.addEventListener('click',onClickDecrement);



let counterValue = 0;
function onClickIncrease(){
    counterValue=counterValue+1;
     counterEl.textContent = counterValue
     
}


function onClickDecrement(){
    counterValue = counterValue-1;
    counterEl.textContent = counterValue
}


