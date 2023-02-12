function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let inputEl = document.querySelector('input[type="number"]');
let createButton = document.querySelector('[data-create]');
let destrButton = document.querySelector('[data-destroy]')
let boxesEl = document.querySelector('#boxes');

let newDiv;
let arr =[];
let startValue = 30;

createButton.addEventListener('click',createBoxes);
destrButton.addEventListener('click',destroyBoxes)



function createBoxes(amount){
    amount = inputEl.value
    for (let i=1; i<=amount;i++){
        newDiv = document.createElement('div');
        newDiv.style.width=startValue+'px';
        newDiv.style.height=startValue+'px';
        startValue+=10;
        newDiv.textContent = i;
        newDiv.style.backgroundColor=getRandomHexColor();
        arr.push(newDiv);
    }
    

        boxesEl.append(...arr)
    }
    


    function destroyBoxes(){
    boxesEl.remove(boxesEl.children)
    }
