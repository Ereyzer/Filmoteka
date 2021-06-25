// import { refs } from './variables';

// import '../../node_modules/paginationjs/dist/pagination.less';
import '../../node_modules/paginationjs/src/pagination.js';
import FilmsApiService from './api-content.js';

const newFilmsApi = new FilmsApiService();

(function (name) {
  const container = $('#pagination-' + name);

  container.pagination({
    dataSource: `https://api.themoviedb.org/3/movie/popular?api_key=f4d5ed62044715aa9c5e4de0663d29b2&language=en-US`,
    locator: 'results',
    totalNumber: 1000,
    pageSize: 20,
    showBeginingOnOmit: false,
    // pageRange: newFilmsApi.page,

    ajax: {
      beforeSend: function () {
        container.prev().html('Loading data from themoviedb.org ...');
      },
    },
    callback: function (response, pagination) {
      window.console && console.log(22, response, pagination);
      let dataHtml = '<ul>';

      $.each(response, function (index, result) {
        dataHtml += '<li>' + result.title + '</li>';
      });

      dataHtml += '</ul>';

      container.prev().html(dataHtml);
    },

    //     function(done){
    //     var result = [];
    //     for (var i = 1; i < 196; i++) {
    //         result.push(i);
    //     }
    //     done(result);
    //  }
  });
})('container');
