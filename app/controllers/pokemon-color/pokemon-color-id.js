'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  color_search: '',
  search_filter: '',

  filtered_pokemon: Ember.computed.filter('model.pokemon_species', function(pokemon) {
    let filter = this.get('search_filter').toLowerCase(),
        name = pokemon.name;

    return name.includes(filter);
  }),

  clear_search: function() {
    this.set('color_search', '');
    this.set('search_filter', '');
  }.observes('model'),

  actions: {
    update_search: function(value) {
      this.set('color_search', value);
      this.set('search_filter', value);
      this.notifyPropertyChange('filtered_pokemon');
    }
  }
});
