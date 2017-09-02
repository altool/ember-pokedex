'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['epd-c-colorChip'],
  classNameBindings: ['chipColor'],

  chipColor: Ember.computed('color', function() {
    return 'epd-c-colorChip--' + this.get('color');
  })
});
