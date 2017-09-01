'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    
    return ["black", "blue", "brown", "gray", "green", "pink", "purple", "red", "white", "yellow"];
  }
});