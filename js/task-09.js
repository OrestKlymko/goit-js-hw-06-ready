function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor())

const spanText = document.querySelector('.color');
const button = document.querySelector('.change-color');
const bodyEl = document.querySelector('body')

button.addEventListener('click',changeBodyandSpan)


function changeBodyandSpan(){
  let randomColor = getRandomHexColor();
  spanText.textContent=randomColor
  bodyEl.style.backgroundColor=randomColor
  
}

