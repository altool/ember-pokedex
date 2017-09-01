'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    return this.get('store').findRecord('growth-rate', params.growth_rate_id);
  }
});
