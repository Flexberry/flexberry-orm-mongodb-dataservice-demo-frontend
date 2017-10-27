import { moduleForModel, test } from 'ember-qunit';

moduleForModel('camera', 'Unit | Model | camera', {
  // Specify the other units that are required for this test.
  needs: [
    'model:camera',
    'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event',
    'model:reg-object'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
