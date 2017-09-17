'use strict';
import DS from "ember-data";

var ApplicationAdapter = DS.JSONAPIAdapter.extend({
  host: 'https://pokeapi.co',
  namespace: 'api/v2',
  headers: { 
   'Accept': 'application/json'
  }
});

export default ApplicationAdapter;