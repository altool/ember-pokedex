'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarOpen: false,
  leftSideBarLockedOpen: false,

  spriteURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',

  actions: {
    toggle(value) {
      return this.toggleProperty(value);
    }
  }
});
