'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  genus: Ember.computed.filter('model.species.genera', function(entry) {
    return entry.language.name == 'en';
  }),

  evolution_id: Ember.computed('model.species.evolution_chain', function() {
    let evo_url = this.get('model.species.evolution_chain.url');

    return String(evo_url).split('/')[6];
  }),

  types_data: Ember.computed.map('model.base.types', function(type) {

    let new_data = {
      "name": type.type.name,
      "id": String(type.type.url).split('/')[6]
    };

    return new_data;
  }),

  abilities_data: Ember.computed.map('model.base.abilities', function(ability) {

    let new_data = {
      "name": ability.ability.name,
      "is_hidden": ability.is_hidden,
      "id": String(ability.ability.url).split('/')[6]
    };

    return new_data;
  }),

  abilitySorting: ['is_hidden'],
  sorted_abilities: Ember.computed.sort('abilities_data', 'abilitySorting')
});
