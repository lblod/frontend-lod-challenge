import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | participate/discover', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:participate/discover');
    assert.ok(route);
  });
});
