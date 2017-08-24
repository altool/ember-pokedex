'use strict';
import DS from 'ember-data';

export default DS.Model.extend({

  slot: DS.attr('number'),
  type: DS.attr({
    url: DS.attr('url'),
    name: DS.attr('string')
  })
});
