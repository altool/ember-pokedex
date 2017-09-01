'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarLockedOpen: true,

  actions: {
    toggle(value) {
      return this.toggleProperty(value);
    }
  }
});
