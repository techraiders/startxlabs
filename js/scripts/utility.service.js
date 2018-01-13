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

    this.previewImages = function() {
      console.log(this.files);
      for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        var imageType = /^image\//;

        if (!imageType.test(file.type)) {
          continue;
        }

        var img = document.createElement('img');
        img.classList.add('img-thumbnail');
        img.style.height = '100px';
        img.style.width = '100px';
        img.file = file;

        var preview = document.getElementById('preview');
        preview.appendChild(img); // // Assuming that "preview" is the div output where the content will be displayed.

        var reader = new FileReader();
        reader.onload = (function(aImg) {
          return function(e) {
            aImg.src = e.target.result;
          };
        })(img);

        reader.readAsDataURL(file);
      }
    };
  }
})();


/*
One massive help provided by CSS in aiding developers to create responsive designs is max-width.  I always set img, iframe, and embed tags to max-width: 100% so that they aren't allowed bleed through their parent and stretch the page on mobiles, but I recently asked myself if it was possible to get an image's "true" size with JavaScript.  I wanted the real image dimensions without any CSS modifications.  MDN informed me of a property I'd never heard of  which provided me the information I wanted!

The JavaScript
Using some JavaScript magic, we can get the real dimensions of an image:

myImage.addEventListener('load', function() {
	console.log('My width is: ', this.naturalWidth);
	console.log('My height is: ', this.naturalHeight);
});

I had never heard of these read only naturalWidth and naturalHeight properties but I'm happy they're available.  No matter how terrible CSS mangles an img element, the original image dimensions are available.  Of course the image's onload event should be triggered before checking the image dimensions as you cannot know them without the image being loaded.
*/
