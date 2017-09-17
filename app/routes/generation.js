'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Generations',

  model: function() {
    
    return [{
      "name": "I",
      "id": 1
    }, {
      "name": "II",
      "id": 2
    }, {
      "name": "III",
      "id": 3
    }, {
      "name": "IV",
      "id": 4
    }, {
      "name": "V",
      "id": 5
    }, {
      "name": "VI",
      "id": 6
    }];
  }
});
