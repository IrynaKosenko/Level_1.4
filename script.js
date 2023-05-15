
const div = document.getElementById('first-div');

// JS (удаление элемента)
function removeButton2() {
    div.remove();
}

// CSS+JS (навешивать на элемент класс hidden, а в CSS прописать такие стили чтоб они скрывали всё с классом hidden)
function removeButton3() {
    div.setAttribute('class', 'hidden');
}

// Сделать так, чтоб по клику на кнопку блок исчезал, если он есть, и чтоб появлялся, если он был скрыт 
function toggleButton() {
    if (div.style.visibility === 'hidden' || div.style.display === 'none') {
        div.style.visibility = "visible";
        div.style.display = "block";
    } else {
        div.style.visibility = "hidden";
        div.style.display === 'none'
    }
}
// Сделать на странице 5 таких блоков, дать им всем одинаковый класс, благодаря которому они все станут 
// выглядеть как черные квадраты. Сделать так чтоб они все одновременно скрывались/появлялись по нажатию на кнопку.
function funcForFiveBlocks() {
    const blocksCollection = document.getElementsByClassName('block');
    console.log(blocksCollection);
    for (let i = 0; i < blocksCollection.length; i++) {
        if (blocksCollection[i].style.display === 'none') {
            blocksCollection[i].style.display = 'block';
        } else {
            blocksCollection[i].style.display = 'none';
        }
    }
}
// Добавить на страницу инпут, в который можно ввести css selector (query selector) 
// и при нажатии на кнопку будут скрываться/появляться те элементы, которые соответствуют этому селектору.
function inputButton(value) {
    let newElement;
    if (value !== '') {
        if (newElement) newElement.remove();
        const selectors = document.querySelectorAll(value);
        for (let i = 0; i < selectors.length; i++) {
            if (selectors[i].style.display === 'none') {
                selectors[i].style.display = 'block';
            } else {
                selectors[i].style.display = 'none';
            }
        }
    } else {
        newElement = document.createElement('p');
        newElement.innerHTML = 'Enter a value!';
        newElement.style.color = 'red';
        document.querySelector('.input-container').append(newElement);
    }
}
//Добавить на страницу желтый квадрат, и сделать так чтоб при нажатии на него в первый раз выводилась надпись "Привет" (alert), 
//а при втором нажатии этот квадрат пропадал. (нужно менять функцию обработчик, удалять первую и ставить вторую)

const yellowSquare = document.getElementById('yellow-square');
function firstClick() {
    alert('Hello!');
    yellowSquare.removeEventListener('click', firstClick);
    yellowSquare.addEventListener('click', function () {
        yellowSquare.setAttribute('class', 'hidden');
    });
}
yellowSquare.addEventListener('click', firstClick);

// Добавить на страницу красный квадрат 50х50 пх, который будет появляться как только человек наводит курсор на кнопку, 
//и скрываться как только человек убирает курсор с кнопки
const btnRedSquare = document.querySelector('.for-red-square');
const redSquare = document.querySelector('#red-square');

btnRedSquare.addEventListener("mouseout", function () {
    redSquare.setAttribute('class', 'hidden')
});

btnRedSquare.addEventListener("mouseover", function () {
    redSquare.setAttribute('class', '')
});

//Добавить на страницу зеленый прямоугольник 50х20 пх, который будет появляться как только человек фокусируется на инпуте 
//и исчезать как только человек начинает писать текст в этот инпут.
const formGreenSquare = document.forms.greenSquare;
const inputGreen = formGreenSquare.inputGreenSquare;
const greenSquare = document.getElementById('green-square');

inputGreen.addEventListener('focus', function () {
    if (inputGreen.value === '') {
        greenSquare.setAttribute('class', '');
    }
});
inputGreen.addEventListener('input', function () {
    greenSquare.setAttribute('class', 'hidden');
});

//Добавить на страницу инпут и кнопку. Если в инпут положить ссылку, 
//и нажать на кнопку то на странице появится картинка полученная по ссылке, которую ввели в инпут.

const buttonURL = document.querySelector('.button-URL');
const inputValue = document.forms.nameURL.inputURL;

buttonURL.addEventListener('click', function () {
    if (inputValue.value !== '') {
        document.getElementById('image').src = inputValue.value;
    }
});

// Превратить инпут в textarea, в которую можно вводить ссылки, каждую с новой строчки.
// При нажатии на кнопку на странице появится столько картинок, сколько ссылок ввели в textarea (картинки берутся по ссылкам).

const divForImages = document.getElementById('input-many-images');
const textArea = document.createElement('textarea');
const f = document.forms.formForManyImages;
const inputForm = document.forms.formForManyImages.inputManyImages;

inputForm.replaceWith(textArea);
textArea.setAttribute('id', 'idTextArea');

textArea.onchange = function () {
    let valueTextArea = document.getElementById('idTextArea').value;
    let arrayTextArea = valueTextArea.split('\n');
    console.log(arrayTextArea);
    for (let i = 0; i < arrayTextArea.length; i++) {
        console.log(arrayTextArea[i]);
        let img = document.createElement('img');
        img.setAttribute('src', arrayTextArea[i]);
        divForImages.append(img);
    }
}

// Сделать блок в правом верхнем углу страницы, в котором 
//в формате "Х: 123, У: 984" будут выводиться координаты курсора (обновляться в риалтайме)
document.addEventListener('mousemove', function (e) {
    document.querySelector('.parag-position-1').textContent = `ClientX: ${e.clientX}, ScreenX: ${e.screenX}`;
    document.querySelector('.parag-position-2').textContent = `ClientY: ${e.clientY}, ScreenY: ${e.screenY}`;
    // Добавить в блок в правом верхнем углу информацию о том какой язык выбран в браузере у пользователя
    document.querySelector('.parag-lang').textContent = `Lang: ${navigator.language}`;
    //Добавить в блок в правом верхнем углу отображение широты и долготы на которой 
    //находится человек (формат: "Ш: 34.23234, Д: 78.239482034").
    navigator.geolocation.getCurrentPosition(function (pos) {
        let latit = pos.coords.latitude;
        let long = pos.coords.longitude;
        document.querySelector('.parag-position-3').textContent = `Ш: ${latit}, Д: ${long}`;
    });
});

// Добавить на страницу три блока и сделать текст внутри них редактируемым, 
//как в инпуте (но чтоб это был не нативный инпут). То, что человек введет в эти "инпуты"
// должно в них и оставаться при перезагрузке страницы (onload событие).

// 1. для первого использовать localStorage
//localStorage.clear();
let divLocalStorage = document.getElementById('div-localStorage');

divLocalStorage.textContent = localStorage.getItem('div-localStorage');
divLocalStorage.addEventListener('input', function () {
    localStorage.setItem('div-localStorage', divLocalStorage.textContent);
});

// 2. для второго использовать cookies

const divCookies = document.getElementById('div-cookies');
const c = decodeURIComponent(document.cookie);
let arrayCookies = c.split('=')
divCookies.textContent = arrayCookies[1];
divCookies.addEventListener('blur', function () {
   document.cookie = 'cookie=' + divCookies.textContent; 
   console.log(divCookies.textContent);
});

// 3. для третьего использовать sessionStorage
let divSessionStorage = document.getElementById('div-sessionStorage');
divSessionStorage.textContent = sessionStorage.getItem('div-sessionStorage');
divSessionStorage.addEventListener('input', function () {
    sessionStorage.setItem('div-sessionStorage', divSessionStorage.textContent);
});

// Сделать кнопку, которая появляется когда мы уже пролистали экран вниз
// и по нажатию на которую человека плавно кидает наверх страницы.
const btnUp = document.querySelector('.btn-up');
window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}
let scrolled, timer;
btnUp.addEventListener('click', (event) => {
    window.scroll({
        left: 0,
        top: 0,
        behavior:'smooth'
    });
    //window.scrollTo(0,0);
    //document.documentElement.scrollTop = 0;
});

//Сделать два блока, один внутри другого. Навешать на каждый из них слушатель клика,
// который вызывает алерт. Сделать так чтоб при нажатии на маленький вызывался всего один алерт.
const bigBlock = document.querySelector('.big-block');
const smallBlock = document.querySelector('.small-block');

bigBlock.addEventListener('click', () => {
    alert('Big block');
});
smallBlock.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Small block');
});

// (30 минут) Сделать кнопку, по нажатию на которую появляется серый полупрозрачный квадрат 
// на весь экран и нельзя было скроллить страницу пока он не скроется.
// Скрывать квадрат по нажатию на него.

const grayButton = document.querySelector('.gray-block');
const grayBlock = document.getElementById('gray-block');

grayButton.addEventListener('click', () => {
    grayBlock.style.display = 'block';
    document.body.style.overflow = 'hidden';

    grayBlock.addEventListener('click', () => {
        grayBlock.style.display = 'none';
        document.body.style.overflow = 'auto';
    })
});

//Сделать так чтоб при нажатии на кнопку "GO" не перезагружалась страница.
const inputGo = document.getElementById('input-go');
inputGo.addEventListener('click', (evt) => {
    evt.preventDefault();
});

// * (1 час) Сделать красивый инпут type="file".
// Сделать чтоб при перетаскивании файла на этот инпут, он красиво менялся (drag-n-drop).
// Ну и когда файл уже выбран тоже

let inputFile = document.getElementById('input-for-file');
let container = document.querySelector('.container-drag-drop');
let error = document.getElementById('error');
let fileDisplay = document.getElementById('file-display');

const funcInput = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        let fileContainer = document.createElement('div');
        fileContainer.setAttribute('class', 'file-container');
        let img = document.createElement('img');
        img.src = reader.result;
        fileContainer.appendChild(img);
        fileDisplay.appendChild(fileContainer);
    };
};
// Input
inputFile.addEventListener('change', () => {
    Array.from(inputFile.files).forEach((file) => {
        funcInput(file);
    });
})
//Drag and drop
container.addEventListener('dragenter', (e) => {
    e.stopPropagation();
    e.preventDefault();
    container.classList.add('active');
});
container.addEventListener('dragover', (e) => {
    e.stopPropagation();
    e.preventDefault();
    container.classList.add('active');
});
container.addEventListener('dragleave', (e) => {
    e.stopPropagation();
    e.preventDefault();
    container.classList.remove('active');
});
container.addEventListener('drop', (e) => {
    e.stopPropagation();
    e.preventDefault();
    container.classList.remove('active');
    container.style.backgroundColor = "green";
   const draggedData = e.dataTransfer;
    const files = draggedData.files;  // it is a FileList
    const arrayFiles = [...files];    // create an array from FileList
    arrayFiles.forEach((file) => {
        funcInput(file);
    });
});


