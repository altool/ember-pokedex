'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  weight: DS.attr('number'),
  types: DS.attr(),
  sprites: DS.attr({
    back_default: DS.attr('url'),
    back_shiny: DS.attr('url'),
    front_default: DS.attr('url'),
    front_shiny: DS.attr('url')
  })
});
