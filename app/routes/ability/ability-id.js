'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    return this.get('store').findRecord('ability', params.ability_id);
  }
});
