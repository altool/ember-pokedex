'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Colors',

  model: function() {
    
    return [{
      "name": "black",
      "id": 1
    }, {
      "name": "blue",
      "id": 2
    }, {
      "name": "brown",
      "id": 3
    }, {
      "name": "gray",
      "id": 4
    }, {
      "name": "green",
      "id": 5
    }, {
      "name": "pink",
      "id": 6
    }, {
      "name": "purple",
      "id": 7
    }, {
      "name": "red",
      "id": 8
    }, {
      "name": "white",
      "id": 9
    }, {
      "name": "yellow",
      "id": 10
    }];
  }
});

