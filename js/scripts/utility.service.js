(function() {
  'use strict';
  angular.module('githubApp')
    .service('utilityService', [Service]);

  function Service() {
    this.checkPhoto = function checkPhoto() {
      var _URL = window.URL;
      var file, img;
      if ((file = this.files[0])) {
        img = new Image();
        img.onload = function() {
          alert("Width:" + this.width + "   Height: " + this.height); //this will give you image width and height and you can easly validate here....
          if (this.width < 600) {
            alert('Width is less than 600px. Please upload another.');
          } else if (this.height > 600) {
            alert('Width is greater than 600px. Please crop it.');
          }
        };
        img.src = _URL.createObjectURL(file);
      }
    };
  }
})();
