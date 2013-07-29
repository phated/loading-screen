define([
  './update',
  './draw',
  'lodash',
  'frozen/GameCore',
  'frozen/Animation',
  'frozen/plugins/loadImage!frozenjs.png'
], function(update, draw, _, GameCore, Animation, frozenjs){

  'use strict';

  function createAnimations(cellCount, img, duration){
    var anims = [];
    var count = Math.floor(Math.sqrt(cellCount));

    for(var row = 0; row < count; row++){
      var anim = Animation.prototype.createFromSheet(count, duration, img, img.width / count,  img.height / count, row);
      anim.frames = _.shuffle(anim.frames);
      /* jshint loopfunc: true */
      _.forEach(anim.frames, function(frame, idx){
        frame.endTime = anim.totalDuration / anim.frames.length * (idx + 1);
      });
      anims.push(anim);
    }

    return anims;
  }

  //setup a GameCore instance
  var game = new GameCore({
    canvasId: 'canvas',
    gameAreaId: 'gameArea',
    // canvasPercentage: 0.95,
    update: update,
    draw: draw,
    anims: createAnimations(50, frozenjs, 250)
  });

  //if you want to take a look at the game object in dev tools
  console.log(game);

  //launch the game!
  game.run();

});