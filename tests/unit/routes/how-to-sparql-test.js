import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | how-to-sparql', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:how-to-sparql');
    assert.ok(route);
  });
});
