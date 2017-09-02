'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['epd-c-imageChip'],
  classNameBindings: ['chipColor'],

  chipImage: 'http://lorempixel.com/g/100/100',
  chipText: 'Text here!',

  chipColor: Ember.computed('color', function() {
    return 'epd-c-imageChip--' + this.get('color');
  })
});
