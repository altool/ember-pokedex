'use strict';
import Ember from 'ember';

export function nextPoke(params/*, hash*/) {
  let id = parseInt(params);

  return (id < 1000) ? (id + 1) : null;
}

export default Ember.Helper.helper(nextPoke);
