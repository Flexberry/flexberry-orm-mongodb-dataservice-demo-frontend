import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ember-flexberry-dummy-test-poly', 'Unit | Model | ember-flexberry-dummy-test-poly', {
  // Specify the other units that are required for this test.
  needs: [
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

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
