'use strict';
import Ember from 'ember';
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
  }),
  abilities: DS.attr(),

  next_id: Ember.computed('id', function(){
    let id = parseInt(this.get('id'));

    return id < 1000 ? id + 1 : null;
  }),

  prev_id: Ember.computed('id', function(){
    let id = parseInt(this.get('id'));

    return (id > 1) ? (id - 1) : null;
  })
});
