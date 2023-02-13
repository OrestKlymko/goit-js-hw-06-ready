const inputEl = document.querySelector('#validation-input')
const checkData = inputEl.getAttribute('data-length');//6

inputEl.addEventListener('blur',onChangeBlur)

function onChangeBlur(event){
    console.log(event)
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length !== Number(checkData)){
         inputEl.classList.add('invalid');
    }else{
   
          inputEl.classList.add('valid');
            inputEl.classList.remove('invalid')
    }
}

