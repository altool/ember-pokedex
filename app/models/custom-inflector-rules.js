'use strict';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('pokemon', 'pokemon');

// Meet Ember Inspector's expectation of an export
export default {};