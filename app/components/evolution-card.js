'use strict';
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['epd-c-evoCard__container', 'epd-l-evolution__stage'],
  classNameBindings: ['stage_class'],

  stage_class: Ember.computed('stage', function(){
    return 'epd-c-evoCard__container--stage-' + this.get('stage');
  }),

  container_class: Ember.computed('stage', function(){
    return 'epd-c-evoCard__container--stage-' + this.get('stage');
  }),

  evo_id: Ember.computed('data.species.url', function(){
    return String(this.get('data.species.url')).split('/')[6];
  }),

  evo_details: Ember.computed('data.evolution_details', function() {
    let data = this.get('data.evolution_details') ? this.get('data.evolution_details') : [];

    data.forEach(function(dataItem){
      let evo_result = '';

      if ( dataItem.trigger.name == 'level-up' && !dataItem.min_level ) { evo_result += 'Level up '; }

      if ( dataItem.min_level ) { evo_result += `Level ${dataItem.min_level} `; }

      if ( dataItem.trigger.name == 'trade' ) { evo_result += 'Trade '; }

      if ( dataItem.item ) { evo_result += `Use ${capitalize(dataItem.item.name)} `; }

      if ( dataItem.trade_species ) { evo_result += `with ${dataItem.trade_species.name} `; }

      if ( dataItem.min_happiness ) { evo_result += 'with max happiness '; }

      if ( dataItem.min_beauty ) { evo_result += 'with max beauty '; }

      if ( dataItem.held_item ) { evo_result += `while holding ${capitalize(dataItem.held_item.name)} `; }

      if ( dataItem.time_of_day ) { evo_result += `during the ${dataItem.time_of_day}time `; }

      if ( dataItem.location ) { evo_result += `at ${capitalize(dataItem.location.name)} `; }

      if ( dataItem.gender ) { evo_result += `if ${dataItem.gender == 1 ? 'female' : 'male'} `; }

      if ( dataItem.known_move ) { evo_result += `if knows ${capitalize(dataItem.known_move.name)} `; }

      if ( dataItem.known_move_type ) { evo_result += `if knows a ${capitalize(dataItem.known_move_type.name)} move `; }

      if ( dataItem.party_species ) { evo_result += `with ${capitalize(dataItem.party_species.name)} in party `; }

      if ( dataItem.min_affection ) { evo_result += `with ${dataItem.min_affection} affection hearts `; }

      if ( dataItem.turn_upside_down ) { evo_result += 'with device upside-down '; }

      if ( dataItem.needs_overworld_rain ) { evo_result += 'in a rainy area '; }

      if ( dataItem.relative_physical_stats ) {
        if (dataItem.relative_physical_stats == 1) {
          evo_result += 'with higher Attack than Defense ';
        } else if (dataItem.relative_physical_stats == -1) {
          evo_result += 'with higher Defense than Attack ';
        } else if (dataItem.relative_physical_stats === 0) {
          evo_result += 'with equal Attack and Defense ';
        }
      }

      Ember.set(dataItem, 'evo_result', evo_result.replace(/-/g, " "));
    });

    return data;
  })
});

const capitalize = string => string.toString().replace(/\b\w/g, l => l.toUpperCase());
