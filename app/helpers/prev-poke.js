'use strict';
import Ember from 'ember';

export function prevPoke(params/*, hash*/) {
  let id = parseInt(params);

  return (id > 1) ? (id - 1) : null;
}

export default Ember.Helper.helper(prevPoke);
