'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  stats_reversed: Ember.computed('model.base.stats', function() {
    return this.get('model.base.stats').reverse();
  })
});
