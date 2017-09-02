'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    
    return ["ball", "squiggle", "fish", "arms", "blob", "upright", "legs", "quadruped", "wings", "tentacles", "head", "humanoid", "bug-wings", "armor"];
  }
});
