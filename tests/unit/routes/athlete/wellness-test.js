import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | athlete/wellness', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:athlete/wellness');
    assert.ok(route);
  });
});
