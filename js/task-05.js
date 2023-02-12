/*jshint esversion: 6 */

const inputEl = document.querySelector('#name-input');
const helloEl = document.querySelector('#name-output');

inputEl.addEventListener('change',inputChange);

function inputChange(event){
(event.currentTarget.value.length>0)? 
    helloEl.textContent= event.currentTarget.value
    :helloEl.textContent="Anonymous"
}