(function() {
  'use strict';
  angular.module('githubApp')
    .controller('ProfileSearch', ['searchService', 'utilityService', '$http', Controller]);

  function Controller(searchService, utilityService, $http) {
    var vm = this;
    vm.search = search;

    vm.user = {
      "login": "techraiders",
      "id": 19530178,
      "avatar_url": "https://avatars1.githubusercontent.com/u/19530178?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/techraiders",
      "html_url": "https://github.com/techraiders",
      "followers_url": "https://api.github.com/users/techraiders/followers",
      "following_url": "https://api.github.com/users/techraiders/following{/other_user}",
      "gists_url": "https://api.github.com/users/techraiders/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/techraiders/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/techraiders/subscriptions",
      "organizations_url": "https://api.github.com/users/techraiders/orgs",
      "repos_url": "https://api.github.com/users/techraiders/repos",
      "events_url": "https://api.github.com/users/techraiders/events{/privacy}",
      "received_events_url": "https://api.github.com/users/techraiders/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Navneet Prakash",
      "company": "CityExploro",
      "blog": "https://in.linkedin.com/in/techraiders",
      "location": "New Delhi, India",
      "email": null,
      "hireable": true,
      "bio": null,
      "public_repos": 17,
      "public_gists": 16,
      "followers": 0,
      "following": 4,
      "created_at": "2016-05-23T10:20:16Z",
      "updated_at": "2017-04-03T19:47:20Z"
    };

    var el = document.getElementById('imageId');
    el.addEventListener('change', utilityService.checkPhoto, false);

    function search(userName) {
      searchService.search(userName).then(function(response) {
        vm.user = response;
      });
    }
  }
})();
