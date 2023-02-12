/*jshint esversion: 6 */
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let ulEl = document.querySelector('.gallery')

function createImage(arr) {
  return arr.map((image) => {

    let {url, alt} = image;

    let liEl = document.createElement('li');
    let img = document.createElement('img');
    let createSrc = img.setAttribute('src', `${url}`);
    let createAlt = img.setAttribute('alt', `${alt}`);
    liEl.insertAdjacentElement('afterbegin',img)
    return liEl
  })
}

let resultFunc = createImage(images);

ulEl.append(...resultFunc)