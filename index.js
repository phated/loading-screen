(function(){

  'use strict';

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var loaded = 0;

  function onload(){
    loaded++;
    if(loaded === 2){
      loop();
    }
  }

  var frozen = new Image();
  frozen.addEventListener('load', onload);
  frozen.src = 'frozenjs.png';

  var blue = new Image();
  blue.addEventListener('load', onload);
  blue.src = 'clearjs.png';

  var width;
  var height;
  var percentage = 0;

  function loop(){
    width = blue.width;
    height = blue.height;
    context.drawImage(frozen, 0, 0, frozen.width, frozen.height);

    // Circle cropping
    // var cropX = width * percentage / 2;
    // var cropY = height * percentage / 2;
    // var cropWidth = width - (width * percentage);
    // context.save();
    // context.globalAlpha = Math.abs(percentage - 1);
    // context.beginPath();
    // context.arc(canvas.width / 2, canvas.height / 2, cropWidth / 1.5, 0, 2 * Math.PI, false);
    // context.clip();
    // context.restore();

    // Radial Gradient
    var x1 = width / 2;   // x of 1. circle center point
    var y1 = height / 2;   // y of 1. circle center point
    var r1 = 0;    // radius of 1. circle

    var x2 = width / 2;   // x of 2. circle center point
    var y2 = height / 2;   // y of 2. circle center point
    var r2 = 100 + (percentage * width * 1.5);   // radius of 2. circle

    var radialGradient = context.createRadialGradient(x1, y1, r1, x2, y2, r2);

    radialGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    radialGradient.addColorStop(1, 'rgba(16, 183, 251, 1)');

    context.fillStyle = radialGradient;
    context.fillRect(0,0, width, height);

    context.drawImage(blue, 0, 0, blue.width, blue.height);

    setTimeout(function(){
      percentage += 0.05;
      if(percentage <= 100){
        loop();
      }
    }, 500);
  }

})();