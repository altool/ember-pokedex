'use strict';
import Ember from 'ember';

export function pokemonId(params) {
  return String(params).split('/')[6];
}

export default Ember.Helper.helper(pokemonId);
