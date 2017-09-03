'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    return this.get('store').findRecord('evolution-chain', params.evolution_chain);
  }
});
