// Number of categories: 3
//
// Category: Animals
// Elements: 4
//
// Category: Products
// Elements: 3
//
// Category: Technologies
// Elements: 5

//1
const ulEl = document.querySelector('#categories');
const liEl = ulEl.children;
console.log(`Number of categories: ${liEl.length}`);


//2


const headerEl = document.querySelectorAll('h2');

headerEl.forEach(el=>{

        console.log(`Category: ${el.textContent} elements: ${el.nextElementSibling.children.length}`);

})







