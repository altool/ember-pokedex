'use strict';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sprite', 'helper:sprite', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1');

  this.render(hbs`{{sprite inputValue}}`);

  assert.equal(this.$().text().trim(), 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
});

