define([
  'lodash'
], function(_){

  'use strict';

  return function(ctx){
    _.forEach(this.anims, function(anim){
      var cf = anim.getCurrentFrame();
      var frames = anim.frames.length;
      anim.draw(ctx, anim.image.width / frames * cf.imgSlotX, anim.image.height / frames * cf.imgSlotY);
    });
  };

});