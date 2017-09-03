'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  engDex: Ember.computed.filter('model.species.flavor_text_entries', function(entry) {
    return entry.language.name == 'en';
  }),

  engDex_reversed: Ember.computed('engDex', function() {
    return this.get('engDex').reverse();
  })
});
