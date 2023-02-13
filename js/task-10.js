function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let inputEl = document.querySelector('input[type="number"]');
let createButton = document.querySelector('[data-create]');
let destrButton = document.querySelector('[data-destroy]')
let boxesEl = document.querySelector('#boxes');


let newDiv;
let arr =[];


createButton.addEventListener('click',createBoxes);

destrButton.addEventListener('click',destroyBoxes);



function createBoxes(amount){
   
    let startValue = 30;
    amount = inputEl.value
    for (let i=1; i<=amount;i++){
        newDiv = document.createElement('div');
        newDiv.style.width=startValue+'px';
        newDiv.style.height=startValue+'px';
        startValue+=10;
        newDiv.textContent = i;
        newDiv.style.backgroundColor=getRandomHexColor();
        arr.push(newDiv);
        newDiv.remove();// не можу зрозуміти чому newDiv залишається в пам*яті.
    }
    boxesEl.append(...arr);
    
    }
    


    function destroyBoxes() {

        while (boxesEl.firstChild) {
            boxesEl.removeChild(boxesEl.firstChild);
        }
        
       //баг в тому, що коли видаляються всі елементи і нажимається кнопка створення елементу, 
        // то якби з пам*яті піднімаються раніше створені елементи і також додаються.
        //Намагався це вирішити на 33 стрічці, тим що видаляю тег одразу після його додавання в масив, але не розумію, як ще це можна реалізувати
    }