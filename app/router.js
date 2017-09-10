'use strict';
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pokemon', function() {
    this.route('pokemon_id', {
      path: ':pokemon_id'
    }, function() {
      this.route('evolution', function() {
        this.route('evolution_chain', {
          path: ':evolution_chain'
        });
      });
      this.route('pokedex');
      this.route('moves');
      this.route('tms');
      this.route('stats');
    });
  });
  this.route('type', function() {
    this.route('type-id', {
      path: ':type_id'
    });
  });
  this.route('ability', function() {
    this.route('ability_id', {
      path: ':ability_id'
    });
  });
  this.route('growth_rate', function() {
    this.route('growth_rate_id', {
      path: ':growth_rate_id'
    });
  });
  this.route('pokemon_color', function() {
    this.route('pokemon_color_id', {
      path: ':pokemon_color_id'
    });
  });
  this.route('pokemon_shape', function() {
    this.route('pokemon_shape_id', {
      path: ':pokemon_shape_id'
    });
  });
  this.route('generation', function() {
    this.route('generation_id', {
      path: ':generation_id'
    });
  });
  this.route('pokemon_habitat', function() {
    this.route('pokemon_habitat_id', {
      path: ':pokemon_habitat_id'
    });
  });
});

export default Router;
