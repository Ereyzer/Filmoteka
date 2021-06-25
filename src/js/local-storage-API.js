import { refs } from './variables';
import FilmsApiService from './api-content';

import filmCards from '../templates/mylibrary.hbs';

import { checkIfEmptyLibrary } from './header-observer';

var pagination = require('pagination');

let library = [];

//* экземпляр класса API
const newFilmsApi = new FilmsApiService();

const { bodyEl, cardsList, myLibraryButton, wBtn, qBtn, homeButton} = refs;

bodyEl.addEventListener('click', getId); //* поиск id фильма
bodyEl.addEventListener('click', addToWatched); //* поиск и добавление в Watched
bodyEl.addEventListener('click', addToQueue); //* поиск и добавление в Queue
wBtn.addEventListener('click', renderWatched);
qBtn.addEventListener('click', renderQueue);
homeButton.addEventListener('click', removeAnimation);


let liId = null;
let localStorageWatched = localStorage.getItem('watched') ? localStorage.getItem('watched') : ''; //* local storage watched
let localStorageQueue = localStorage.getItem('queue') ? localStorage.getItem('queue') : '';  //* local storage queue
let arr = [];

function getId(ev) {
    if (ev.target.className !== 'card-container js-card-container') {
        return;
    }
    liId = ev.target.parentNode.getAttribute('data-action');
    console.log(liId);
}

//* добавляем id фильма в WATCHED (localStorageWatched)
function addToWatched(e) {
    if (e.target.className !== 'modal-btn js-watched') {
        return;
    }

    if (localStorage.getItem('watched')) {  //* проверка на уникальность
        if (localStorage.getItem('watched').split(',').includes(liId)) {
            return;
        }
    }

    localStorageWatched += localStorage.getItem('watched') ? ',' + liId : liId;
    localStorage.setItem('watched', localStorageWatched);
}

//* добавляем id фильма в QUEUE (localStorageQueue)
function addToQueue(e) {
    if (e.target.className !== 'modal-btn js-queue') {
        return;
    }

    if (localStorage.getItem('queue')) {  //* проверка на уникальность
        if (localStorage.getItem('queue').split(',').includes(liId)) {
            return;
        }
    }

    localStorageQueue += localStorage.getItem('queue') ? ',' + liId : liId;
    localStorage.setItem('queue', localStorageQueue);
}

//* Функция рендера списка Watched
async function renderWatched(e) {
    cardsList.innerHTML = "";
    arr = [];
    e.preventDefault();


    const localArr = localStorage.getItem('watched').split(',');
    const promise = new Promise(()=>{
        return newFilmsApi.fetchInformationAboutFilm().then(addLibrary)
    })
    const promises = localArr.map(el => {
        return  newFilmsApi.fetchInformationAboutFilm(el).then(addLibrary)

    });
    Promise.all(promises).then(makePagin);
    cardsList.classList.add('animation');
}


//* Функция рендера списка Queue
async function renderQueue(e) {
    cardsList.innerHTML = "";
    arr = [];
    e.preventDefault();
    const localArr = localStorage.getItem('queue').split(',');

    await  localArr.forEach(el => {
        newFilmsApi.movieId = el;

        newFilmsApi.fetchInformationAboutFilm()

            .then(addLibrary)

    });


    cardsList.classList.add('animation');
}

async function addLibrary(film) {
    console.log(film);
   await library.push(film);
   console.log(library);
   return await film;
}


let splitItem; //* test


//! Удаление id не работает
// function deleteWatchedFilm() {
//     if (localStorage.getItem('watched').split(',').includes(liId)) {
//         let localStorageArr = localStorage.getItem('watched').split(',');
//         localStorageArr = localStorageArr.filter(id=> id!==liId)
//         console.log(localStorageArr);


//         // localStorage.getItem('watched').split(',').forEach(function(el, index){
//         //     if (el === liId) { //! как найти liId через forEach?
//         //         localStorage.getItem('watched').split(',').splice(index, 1);
//         //         console.log('proshlo!', localStorage.getItem('watched').split(','))
//         //     }
//         // });
//     }
// }



// //* удаление id из очереди
// function deleteQueueFilm() {
//   localStorage.removeItem(key);
//   //* вызов функции изменения названия кнопки
// }


//* удаление класса анимации, чтоб она повторялась
function removeAnimation() {
    cardsList.classList.remove('animation');
}




//* pagination
var pag3;
var itemsPerPage = 20;
function makePagin() {
    console.log(library)
     pag3 = new pagination(document.getElementsByClassName('pagination')[0],
  {
      currentPage: 1,		// number
      totalItems: library.length,       // number
      itemsPerPage: 20,    // number
      stepNum: 2,			// number
      onInit: renderLibrary	        // function
  });
   pag3.onPageChanged(renderLibrary);
}
// renderLibrary()
// pag3.onPageChanged(renderNextLibrary);

function renderLibrary(page) {
    refs.cardsList.innerHTML = renderNextLibrary(page);
}

function renderNextLibrary(currentPage) {
        let template = "";
    for (let i = (currentPage - 1) * itemsPerPage; i < (currentPage * itemsPerPage) && i < library.length; i++) {

        template += filmCards(library[i]);
    }
    
    return template;
}
