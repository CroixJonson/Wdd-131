const title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

// document.querySelector('#topics').style.color = 'red';

document.getElementById('content').style.color = 'purple';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('.para');

//para.style.backgroundColor = 'lightblue';

para.classList.add('background');

//document.querySelector('body').classList.add('background');

// let image = document.querySelector('img');
// image.setAttribute('src', 'imgaes/byui-logo-blue.webp');



let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})
                