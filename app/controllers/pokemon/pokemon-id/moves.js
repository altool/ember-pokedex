'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  lvlMoves: Ember.computed.filter('model.base.moves', function(move) {

    return move.version_group_details[0].move_learn_method.name == 'level-up';
  })
});
