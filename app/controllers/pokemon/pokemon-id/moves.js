'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
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

  sortedMoves: Ember.computed.sort("recentMoves", "sortProperties")
});
