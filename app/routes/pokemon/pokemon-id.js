'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    return {
      "base": this.get('store').findRecord('pokemon', params.pokemon_id),
      "species": this.get('store').findRecord('pokemon-species', params.pokemon_id)
    };
  }
});
