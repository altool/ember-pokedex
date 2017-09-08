'use strict';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('next-poke', 'helper:next-poke', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '');

  this.render(hbs`{{next-poke inputValue}}`);

  assert.equal(this.$().text().trim(), '');
});

