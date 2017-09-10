'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  generation: Ember.computed('model.species.generation.name', function(){
    
    let numeral = String(this.get('model.species.generation.name')).split('-')[1];
    let gen_id = '';

    switch(numeral) {
      case 'i':
        gen_id = 1;
        break;
      case 'ii':
        gen_id = 2;
        break;
      case 'iii':
        gen_id = 3;
        break;
      case 'iv':
        gen_id = 4;
        break;
      case 'v':
        gen_id = 5;
        break;
      case 'vi':
        gen_id = 6;
        break;
      default:
        gen_id = 0;
    }

    let new_data = {
      "numeral": numeral,
      "id": gen_id
    };

    return new_data;
  }),

  genus: Ember.computed.filter('model.species.genera', function(entry) {
    return entry.language.name == 'en';
  }),

  growth_rate_id: Ember.computed('model.species.growth_rate', function() {
    let growth_rate_url = this.get('model.species.growth_rate.url');

    return String(growth_rate_url).split('/')[6];
  }),

  habitat_id: Ember.computed('model.species.habitat', function() {
    let habitat_url = this.get('model.species.habitat.url');

    return String(habitat_url).split('/')[6];
  }),

  evolution_id: Ember.computed('model.species.evolution_chain', function() {
    let evo_url = this.get('model.species.evolution_chain.url');

    return String(evo_url).split('/')[6];
  }),

  types_data: Ember.computed.map('model.base.types', function(type) {

    let new_data = {
      "name": type.type.name,
      "id": String(type.type.url).split('/')[6],
      "url": `/assets/images/types/${type.type.name}.png`
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
