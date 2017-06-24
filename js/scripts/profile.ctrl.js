(function() {
  'use strict';
  angular.module('githubApp')
    .controller('ProfileSearch', ['searchService', 'utilityService', Controller]);

  function Controller(searchService, utilityService) {
    var vm = this;

    var el = document.getElementById('imageId');
    el.addEventListener('change', utilityService.checkPhoto, false);


  }
})();
