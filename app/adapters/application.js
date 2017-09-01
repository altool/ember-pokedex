'use strict';
import Ember from 'ember';
import DS from "ember-data";

var ApplicationAdapter = DS.JSONAPIAdapter.extend({
  host: 'http://pokeapi.co',
  namespace: 'api/v2',
  headers: { 
   'Accept': 'application/json'
  }
});

export default ApplicationAdapter;