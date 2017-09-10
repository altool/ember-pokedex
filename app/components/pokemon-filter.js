'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  search_value: '',
  search_filter: '',
  sort_params: ['id:asc'],

  pokemon_data: Ember.computed.map('pokemon', function(pokemon){
    let new_data = {
      "id": parseInt(String(pokemon.url).split('/')[6]),
      "name": pokemon.name,
      "url": pokemon.url,
      "is_hidden": pokemon.is_hidden
    };

    return new_data;
  }),

  filtered_pokemon: Ember.computed.filter('pokemon_data', function(pokemon) {
    let filter = this.get('search_filter').toLowerCase(),
        name = pokemon.name;

    return name.includes(filter) && pokemon.id < 722;
  }),

  sorted_pokemon: Ember.computed.sort('filtered_pokemon', 'sort_params'),

  clear_search: function() {
    this.set('search_value', '');
    this.set('search_filter', '');
  }.observes('pokemon_data'),

  actions: {
    update_search: function(value) {
      this.set('search_value', value);
      this.set('search_filter', value);
      this.notifyPropertyChange('filtered_pokemon');
    }
  }
});
