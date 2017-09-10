'use strict';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('type', 'type');
inflector.irregular('ability', 'ability');
inflector.irregular('pokemon', 'pokemon');
inflector.irregular('generation', 'generation');
inflector.irregular('growth-rate', 'growth-rate');
inflector.irregular('pokemon-color', 'pokemon-color');
inflector.irregular('pokemon-shape', 'pokemon-shape');
inflector.irregular('pokemon-habitat', 'pokemon-habitat');
inflector.irregular('pokemon-species', 'pokemon-species');
inflector.irregular('evolution-chain', 'evolution-chain');

// Meet Ember Inspector's expectation of an export
export default {};