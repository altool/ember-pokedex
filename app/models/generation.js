'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pokemon_species: DS.attr(),
  main_region: DS.attr({
    name: DS.attr('string')
  })
});
