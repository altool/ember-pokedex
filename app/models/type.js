'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pokemon: DS.attr(),

  damage_relations: DS.attr({
    half_damage_from: DS.attr(),
    no_damage_from: DS.attr(),
    half_damage_to: DS.attr(),
    double_damage_from: DS.attr(),
    no_damage_to: DS.attr(),
    double_damage_to: DS.attr()
  })
});
