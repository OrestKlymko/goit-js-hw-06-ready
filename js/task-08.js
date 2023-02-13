
const formEl = document.querySelector('.login-form');
// const inputAll = document.querySelectorAll('input');
// const buttonEl = document.querySelector('button');
formEl.addEventListener('submit',formSubmit);


function formSubmit(event){
    event.preventDefault();
    const {email,password} = event.currentTarget;

    if (email.value === "" || password.value === "") {
         alert("Будь ласка, заповніть усі поля");
    }else{
    function User(value1,value2) {
        this.email = value1.value;
        this.password = value2.value;
    }

    let user = new User(email,password);
    console.log(user)
    event.currentTarget.reset()
    }
}