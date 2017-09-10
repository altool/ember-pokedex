'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  pokemon_data: Ember.computed.map('model.pokemon', function(pokemon){

    let new_data = {
      "name": pokemon.pokemon.name,
      "url": pokemon.pokemon.url,
      "is_hidden": pokemon.is_hidden
    };

    return new_data;
  })
});
