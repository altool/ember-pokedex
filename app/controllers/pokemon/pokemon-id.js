'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  evolution_id: Ember.computed('model.species.evolution_chain', function() {
    let evo_url = this.get('model.species.evolution_chain.url');

    return String(evo_url).split('/')[6];
  })
});
