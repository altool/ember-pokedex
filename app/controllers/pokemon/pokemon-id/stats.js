'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  stats: Ember.computed.filter('model.base.stats', function() { return true; }),

  stats_reversed: Ember.computed('stats', function() {
    return this.get('stats').reverse();
  }),
});
