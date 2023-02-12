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
    switch (el.textContent) {
        case 'Animals':
            console.log(`Category: Animals: ${el.nextElementSibling.children.length}`);
            break;

        case 'Products':
            console.log(`Category: Products: ${el.nextElementSibling.children.length}`);
            break;

        case 'Technologies':
            console.log(`Category: Technologies: ${el.nextElementSibling.children.length}`);
            break;
            
    }
})







