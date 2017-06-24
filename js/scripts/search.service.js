(function() {
  'use strict';
  angular.module('githubApp')
    .factory('searchService', ['$http', Service]);

  function Service($http) {
    var service = {};

    return service;
  }
})();
