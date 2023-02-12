const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ulEl = document.querySelector('#ingredients')
let  liCreate
function createrLi(obj){
return  obj.map(el=>{
    liCreate = document.createElement('li');
    liCreate.classList.add('item');
    liCreate.textContent = el;
    
    return liCreate
})
}
const elements = createrLi(ingredients);
ulEl.append(...elements)

console.log(ulEl)