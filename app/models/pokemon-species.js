'use strict';
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  base_happiness: DS.attr('number'),
  hatch_counter: DS.attr('number'),
  color: DS.attr({
    name: DS.attr('string'),
    url: DS.attr('string')
  }),
  shape: DS.attr({
    name: DS.attr('string'),
    url: DS.attr('string')
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
  genera: DS.attr(),
  flavor_text_entries: DS.attr(),

  color_id: Ember.computed(function(){
    return String(this.get('color.url')).split('/')[6];
  }),

  shape_id: Ember.computed(function(){
    return String(this.get('shape.url')).split('/')[6];
  }),

  shape_img_path: Ember.computed(function(){
    let shape = String(this.get('shape.name'));

    return `/assets/images/forms/${shape}.png`;
  }),

  hatch_steps: Ember.computed('hatch_counter', function(){
    return (parseInt(this.get('hatch_counter')) + 1) * 255;
  })
});
