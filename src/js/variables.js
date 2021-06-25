export const refs = {
  tolik: 5,
  // * ref на main-container
  mainContent: document.querySelector('.js-main'),
  //* на список з картками фільмів
  cardsList: document.querySelector('.js-main-content-list'),
  //* на кнопки для гортання сторінок з фільмами
  flipButtons: document.querySelector('.js-content-control-buttons'),
  //* HOME BUTTON
  homeButton: document.querySelector('.js-homeBtn'),
  //* MY LIBRARY BUTTON
  myLibraryButton: document.querySelector('.js-myLibraryBtn'),
  //* ссилка на HEADER
  header: document.querySelector('.js-header'),
  //* ссилка на лого
  logo: document.querySelector('.js-logo'),
  //* My Library buttons block
  buttonBlockHeader: document.querySelector('.js-container-btn'),
  //* button Watch in header
  wBtn: document.querySelector('.watch'),
  //* button Queue in header
  qBtn: document.querySelector('.queue'),
  //* Search form block
  searchForm: document.querySelector('.js-searchFormBlock'),
  //*search input
  searchInput: document.querySelector('.header-input'),
  //* Modal with a cat
  annoymentModal: document.querySelector('.cat-modal'),
  //* nothing to search
  nothSearch: document.querySelector('.nothing-search__container'),
  //* Button close Modal with a cat
  closeAnnoyment: document.querySelector('.close-annoyment'),

  //* Ul with header buttons
  headerButtons: document.querySelector('.header-buttons'),

  //* navigation header
  navigationHeader: document.querySelector('.nav'),

  // * Backdrop for modal
  backdrop: document.querySelector('.js-backdrop'),

  // * ModalCard with film description
  modalFilmCont: document.querySelector('.js-modal-container'),

  // * ModalCard with film description
  modalFilmInfo: document.querySelector('.js-film-info'),

  //* Button close Modal with a film description
  closeFilmModal: document.querySelector('.js-film-modal-close'),

  // * Body for remove scroll
  bodyEl: document.querySelector('body'),

  listEl: document.querySelector('.main-content-list__item'),

  // * Spinner
  spinner: document.querySelector('.js-spinner-container'),

  //text From Cat Modal
  textFromCatModal: document.querySelector('.titleText'),

  //modal login
  backdropLogIn: document.querySelector('.backdrop-log-in'),

  //close wrap login
  closeLoginWrap: document.querySelector('.close-login-wrap'),

  // btnLogin: document.querySelector('.js-btn-login'),
  formSigning: document.querySelector('.js-form-signing'),

  formSignup: document.querySelector('.js-form-signup'),
  // btnLogin: document.querySelector('.js-btn-reg')

  //GoIt Students
  linkStudents: document.querySelector('.footer-link'),

  //modal team
  backdropTeam: document.querySelector('.backdrop-team-modal'),

  //close modal team
  closeTeam: document.querySelector('.team-modal-close-button'),

  //* player
  player: document.getElementById('player-container'),
};
