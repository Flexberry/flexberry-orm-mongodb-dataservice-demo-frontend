import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ember-flexberry-dummy-child-level2', 'Unit | Serializer | ember-flexberry-dummy-child-level2', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:ember-flexberry-dummy-child-level2',
    'transform:file',
    'transform:decimal',

    'transform:ember-flexberry-dummy-gender',
    'transform:ember-flexberry-dummy-vote-type',

    'transform:ember-flexberry-dummy-post-e-obj',

    'model:camera',
    'model:ember-flexberry-dummy-application-user',
    'model:ember-flexberry-dummy-child-level1',
    'model:ember-flexberry-dummy-child-level2',
    'model:ember-flexberry-dummy-comment-vote',
    'model:ember-flexberry-dummy-comment',
    'model:ember-flexberry-dummy-graduate-record',
    'model:ember-flexberry-dummy-lazy-loading-detail',
    'model:ember-flexberry-dummy-lazy-loading-master',
    'model:ember-flexberry-dummy-localization',
    'model:ember-flexberry-dummy-localized-suggestion-type',
    'model:ember-flexberry-dummy-lookup-dropdown',
    'model:ember-flexberry-dummy-master-lookup-dropdown',
    'model:ember-flexberry-dummy-parent',
    'model:ember-flexberry-dummy-student-record',
    'model:ember-flexberry-dummy-study-record',
    'model:ember-flexberry-dummy-successor-phone',
    'model:ember-flexberry-dummy-successor-social-network',
    'model:ember-flexberry-dummy-suggestion-file',
    'model:ember-flexberry-dummy-suggestion-type',
    'model:ember-flexberry-dummy-suggestion',
    'model:ember-flexberry-dummy-test-poly-another-child',
    'model:ember-flexberry-dummy-test-poly-base',
    'model:ember-flexberry-dummy-test-poly-child',
    'model:ember-flexberry-dummy-test-poly',
    'model:ember-flexberry-dummy-vote',
    'model:event',
    'model:reg-object'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
