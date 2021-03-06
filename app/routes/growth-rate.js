'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Growth Rates',

  model: function() {
    return [{
      "id": 1, 
      "name": "slow"
    }, {
      "id": 2, 
      "name": "medium"
    }, {
      "id": 3, 
      "name": "fast"
    }, {
      "id": 4, 
      "name": "medium-slow"
    }, {
      "id": 5, 
      "name": "slow-then-very-fast"
    }, {
      "id": 6, 
      "name": "fast-then-very-slow"
    }];
  }
});
