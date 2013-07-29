define([
  'lodash'
], function(_){

  'use strict';

  return function(millis){
    _.forEach(this.anims, function(anim){
      anim.update(millis);
    });
  };

});