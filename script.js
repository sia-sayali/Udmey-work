// document.body.children[1].children[0].href = 'https://google.com';

// alert();
// window.alert();

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'http://google.com';

// anchorElement = document.querySelector('#external-id');
// anchorElement.href = 'http://google.com';

// let header = document.querySelector('h1');

// let headerElement = document.getElementById('header');

// let paragraphElement = document.querySelector('paragragh');

// ADD AN ELEMENT
// 1. Create the new element 

let newAnchorElement = document.createElement('a'); 
newAnchorElement.href = 'http://google.com';
newAnchorElement.textContent = 'This leads to google';

// 2. Get access to the parent element that should hold the new element 

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content.

firstParagraph.append(newAnchorElement);

// REMOVE THE ELEMENT
// 1. Select the element that should be removed.

let firstH1Element = document.querySelector('h1');

// 2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser

// MOVE ELEMENT

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'hi! this a <strong>Sia</strong>';