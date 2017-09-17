'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  title: Ember.computed(function(){
    let generation = this.get('model.name').split('-')[1].toUpperCase(),
        region = this.get('model.main_region.name');

    return `Generation ${generation} in the ${capitalize(region)} region.`;
  })
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
