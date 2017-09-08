'use strict';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('prev-poke', 'helper:prev-poke', {
  integration: true
});


// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '');

  this.render(hbs`{{prev-poke inputValue}}`);

  assert.equal(this.$().text().trim(), '');
});

