'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  base_happiness: DS.attr('number'),
  color: DS.attr({
    name: DS.attr('string')
  }),
  shape: DS.attr({
    name: DS.attr('string')
  }),
  habitat: DS.attr({
    name: DS.attr('string')
  }),
  generation: DS.attr({
    name: DS.attr('string')
  }),
  growth_rate: DS.attr({
    name: DS.attr('string')
  }),
  capture_rate: DS.attr('number'),
  evolution_chain: DS.attr(),
  flavor_text_entries: DS.attr()
});
