import { moduleForModel, test } from 'ember-qunit';

moduleForModel('camera', 'Unit | Serializer | camera', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:camera',
    'transform:file',
    'transform:decimal',

    'model:camera',
    'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event',
    'model:reg-object'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
