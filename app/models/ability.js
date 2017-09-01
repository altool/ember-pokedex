'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pokemon: DS.attr(),
  effect_entries: DS.attr()
});
