const inputEl = document.querySelector('#validation-input')
const checkData = inputEl.getAttribute('data-length');//6

inputEl.addEventListener('blur',onChangeBlur)

function onChangeBlur(event){
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length == checkData){
      return   inputEl.classList.add('valid');
    }
    else{
        return  inputEl.classList.add('invalid');
    }
}

