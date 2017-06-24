(function() {
  'use strict';
  angular.module('githubApp')
    .controller('ProfileSearch', ['searchService', 'utilityService', '$http', Controller]);

  function Controller(searchService, utilityService, $http) {
    var vm = this;
    vm.search = search;

    var el = document.getElementById('imageId');
    el.addEventListener('change', utilityService.checkPhoto, false);

    function search(userName) {
      $http.get('https://api.github.com/users/' + userName).then(function(response) {
        console.log(response.data);
        vm.user = response.data;
      }, function(reason) {
        console.log(reason);
      });
    }


  }
})();
