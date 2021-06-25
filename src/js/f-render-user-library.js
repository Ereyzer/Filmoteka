import { refs } from "./variables"
import filmCards from '../templates/mylibrary.hbs'
import FilmsApiService from './api-content'

const { cardsList } = refs;
const newFilmsApi = new FilmsApiService();

function renderUserLibrary(dataIdArr) {
    cardsList.innerHTML = "";
    const arr = [];
//     e.preventDefault();
// const localArr = localStorage.getItem('watched').split(',');
    dataIdArr.forEach(el => {
        newFilmsApi.movieId = el;

        newFilmsApi.fetchInformationAboutFilm()
            .then(r => {
                cardsList.innerHTML = "";
                arr.push(r);
                return arr;
            })
            .then(er => {
                cardsList.innerHTML = filmCards(er);

            });
    });
}

export { renderUserLibrary };