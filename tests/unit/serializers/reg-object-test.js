import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reg-object', 'Unit | Serializer | reg-object', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:reg-object',
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
