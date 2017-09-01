'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    return ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'water', 'fire', 'grass', 'dark', 'electric', 'psychic', 'ice', 'dragon', 'fairy'];
  }
});


