'use strict';
import Ember from 'ember';

export function cleanupText(params) {
  let param = String(params).replace(/-/g, " "),
      capitalized = param.charAt(0).toUpperCase() + param.slice(1);

  return capitalized;
}

export default Ember.Helper.helper(cleanupText);
