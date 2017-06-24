(function() {
  'use strict';
  angular.module('githubApp')
    .controller('ProfileSearch', ['searchService', Controller]);

  function Controller(searchService) {
    var vm = this;

    console.log(searchService);
  }
})();
