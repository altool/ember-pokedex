'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Shapes',

  model: function() {
    
    return [{
        'name': 'ball',
        'id': 1
      }, {
        'name': 'squiggle',
        'id': 2
      }, {
        'name': 'fish',
        'id': 3
      }, {
        'name': 'arms',
        'id': 4
      }, {
        'name': 'blob',
        'id': 5
      }, {
        'name': 'upright',
        'id': 6
      }, {
        'name': 'legs',
        'id': 7
      }, {
        'name': 'quadruped',
        'id': 8
      }, {
        'name': 'wings',
        'id': 9
      }, {
        'name': 'tentacles',
        'id': 10
      }, {
        'name': 'head',
        'id': 11
      }, {
        'name': 'humanoid',
        'id': 12
      }, {
        'name': 'bug-wings',
        'id': 13
      }, {
        'name': 'armor',
        'id': 14
      }
    ];
  }
});
