(function() {
  'use strict';
  angular.module('githubApp')
    .factory('searchService', ['$http', Service]);

  function Service($http) {
    var service = {};

    service.search = function(username) {
      return $http.get('https://api.github.com/users/' + username)
        .then(resolve, reject);
    };

    function resolve(response) {
      // console.log(response.data);
      return response.data;
    }

    function reject(reason) {
      // console.log(reason);
      return reason.data;
    }

    return service;
  }
})();
