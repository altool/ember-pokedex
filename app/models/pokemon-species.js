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
  evolution_chain: DS.attr(),
  flavor_text_entries: DS.attr()
});
