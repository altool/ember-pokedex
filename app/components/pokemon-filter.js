'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  search_value: '',
  search_filter: '',

  filtered_pokemon: Ember.computed.filter('pokemon', function(pokemon) {
    let filter = this.get('search_filter').toLowerCase(),
        name = pokemon.name;

    return name.includes(filter);
  }),

  clear_search: function() {
    this.set('search_value', '');
    this.set('search_filter', '');
  }.observes('pokemon'),

  actions: {
    update_search: function(value) {
      this.set('search_value', value);
      this.set('search_filter', value);
      this.notifyPropertyChange('filtered_pokemon');
    }
  }
});
