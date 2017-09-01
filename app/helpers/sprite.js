'use strict';
import Ember from 'ember';

export function sprite(id) {

  return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
}

export default Ember.Helper.helper(sprite);
