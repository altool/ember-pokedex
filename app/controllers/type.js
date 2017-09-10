'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  type_chips: Ember.computed.map('model', function(item){
    let new_data = {
      name: item.name,
      id: item.id,
      url: `/assets/images/types/${item.name}.png`
    };

    return new_data;
  })
});
