'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarOpen: false,
  leftSideBarLockedOpen: false,

  actions: {
    toggle(value) {
      return this.toggleProperty(value);
    }
  }
});
