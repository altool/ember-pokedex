'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
   tokens = Ember.makeArray(tokens);

   return (tokens.length ? tokens.reverse().join(' | ') + ' | EmberDex' : 'EmberDex');
  }
});
