'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  search_value: '',
  search_filter: '',

  lvlMoves: Ember.computed.filter('model.base.moves', function(move) {

    return move.version_group_details[0].move_learn_method.name == 'level-up';
  }),

  tmMoves: Ember.computed.filter('model.base.moves', function(move) {

    return move.version_group_details[0].move_learn_method.name == 'machine';
  }),

  recentMoves: Ember.computed('lvlMoves', function() {
    let moves = this.get('lvlMoves'),
        move_name = '',
        move_level = '',
        moves_result = [];

    moves.forEach(function(move) {
      move_name = move.move.name;

      move.version_group_details.forEach(function(version){

        if ( version.version_group.name == 'x-y' ) { move_level = version.level_learned_at; }
      });

      moves_result.push({
        'name': move_name.replace('-', ' '),
        'level': move_level
      });
    });

    return moves_result;
  }),

  sortProperties: ["level:asc"],

  sortedMoves: Ember.computed.sort("recentMoves", "sortProperties"),

  filtered_moves: Ember.computed.filter('sortedMoves', function(move) {
    let filter = this.get('search_filter').toLowerCase(),
        name = move.name;

    return name.includes(filter);
  }),

  filtered_tms: Ember.computed.filter('tmMoves', function(move) {
    let filter = this.get('search_filter').toLowerCase(),
        name = move.move.name;

    return name.includes(filter);
  }),

  clear_search: function() {
    this.set('search_value', '');
    this.set('search_filter', '');
  }.observes('recent_moves', 'tmMoves'),

  actions: {
    update_search: function(value) {
      this.set('search_value', value);
      this.set('search_filter', value);
      this.notifyPropertyChange('filtered_moves');
      this.notifyPropertyChange('filtered_tms');
    }
  }
});
