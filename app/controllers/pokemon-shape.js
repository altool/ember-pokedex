'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  shape_chips: Ember.computed.map('model', function(item){
    let new_data = {
      name: item.name,
      id: item.id,
      url: `/assets/images/forms/${item.name}.png`
    };

    return new_data;
  })
});
