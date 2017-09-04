'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  evo_details: Ember.computed('data.evolution_details', function() {
    let data = this.get('data.evolution_details');

    data.forEach(function(dataItem){
      let evo_result = '';

      if ( dataItem.trigger.name == 'level-up' && !dataItem.min_level ) { evo_result += 'level up '; }

      if ( dataItem.min_level ) { evo_result += 'level ' + dataItem.min_level + ' '; }

      if ( dataItem.trigger.name == 'trade' ) { evo_result += 'trade '; }

      if ( dataItem.trade_species ) { evo_result += 'with ' + dataItem.trade_species.name + ' in party '; }

      if ( dataItem.min_happiness ) { evo_result += 'with max happiness '; }

      if ( dataItem.min_beauty ) { evo_result += 'with max beauty '; }

      if ( dataItem.item ) { evo_result += 'use ' + dataItem.item.name + ' '; }

      if ( dataItem.held_item ) { evo_result += 'while holding ' + dataItem.held_item.name + ' '; }

      if ( dataItem.time_of_day ) { evo_result += 'during the ' + dataItem.time_of_day + 'time '; }

      if ( dataItem.location ) { evo_result += 'at ' + dataItem.location.name + ' '; }

      if ( dataItem.gender ) {
        let gender_name = (dataItem.gender == 1 ? 'female' : 'male');

        evo_result += 'if ' + gender_name + ' ';
      }

      if ( dataItem.known_move ) { evo_result += 'if knows ' + dataItem.known_move.name + ' '; }

      if ( dataItem.known_move_type ) { evo_result += 'if knows a ' + dataItem.known_move_type.name + '-type move '; }

      if ( dataItem.party_species ) { evo_result += 'with ' + dataItem.party_species.name + ' in party '; }

      if ( dataItem.min_affection ) { evo_result += 'with ' + dataItem.min_affection + ' affection hearts '; }

      if ( dataItem.turn_upside_down ) { evo_result += 'with device upside-down '; }

      if ( dataItem.needs_overworld_rain ) { evo_result += 'in a rainy area '; }

      Ember.set(dataItem, 'evo_result', evo_result);
    });

    return data;
  })
});
