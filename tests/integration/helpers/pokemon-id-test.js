'use strict';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokemon-id', 'helper:pokemon-id', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '');

  this.render(hbs`{{pokemon-id inputValue}}`);

  assert.equal(this.$().text().trim(), '');
});

