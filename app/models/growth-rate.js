'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pokemon_species: DS.attr({
    name: DS.attr('string'),
    url: DS.attr('url')
  })
});
