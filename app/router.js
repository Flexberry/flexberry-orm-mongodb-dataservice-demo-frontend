import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('ember-flexberry-dummy-application-user-list');
  this.route('ember-flexberry-dummy-application-user-edit',
  { path: 'ember-flexberry-dummy-application-user-edit/:id' });
  this.route('ember-flexberry-dummy-application-user-edit.new',
  { path: 'ember-flexberry-dummy-application-user-edit/new' });
  this.route('ember-flexberry-dummy-lazy-loading-master-list');
  this.route('ember-flexberry-dummy-lazy-loading-master-edit',
  { path: 'ember-flexberry-dummy-lazy-loading-master-edit/:id' });
  this.route('ember-flexberry-dummy-lazy-loading-master-edit.new',
  { path: 'ember-flexberry-dummy-lazy-loading-master-edit/new' });
  this.route('ember-flexberry-dummy-localization-list');
  this.route('ember-flexberry-dummy-localization-edit',
  { path: 'ember-flexberry-dummy-localization-edit/:id' });
  this.route('ember-flexberry-dummy-localization-edit.new',
  { path: 'ember-flexberry-dummy-localization-edit/new' });
  this.route('ember-flexberry-dummy-study-record-obj-list');
  this.route('ember-flexberry-dummy-student-record-edit',
  { path: 'ember-flexberry-dummy-student-record-edit/:id' });
  this.route('ember-flexberry-dummy-student-record-edit.new',
  { path: 'ember-flexberry-dummy-student-record-edit/new' });
  this.route('ember-flexberry-dummy-study-record-s-list');
  this.route('ember-flexberry-dummy-graduate-record-edit',
  { path: 'ember-flexberry-dummy-graduate-record-edit/:id' });
  this.route('ember-flexberry-dummy-graduate-record-edit.new',
  { path: 'ember-flexberry-dummy-graduate-record-edit/new' });
  this.route('ember-flexberry-dummy-suggestion-list');
  this.route('ember-flexberry-dummy-suggestion-edit',
  { path: 'ember-flexberry-dummy-suggestion-edit/:id' });
  this.route('ember-flexberry-dummy-suggestion-edit.new',
  { path: 'ember-flexberry-dummy-suggestion-edit/new' });
  this.route('ember-flexberry-dummy-suggestion-type-list');
  this.route('ember-flexberry-dummy-suggestion-type-edit',
  { path: 'ember-flexberry-dummy-suggestion-type-edit/:id' });
  this.route('ember-flexberry-dummy-suggestion-type-edit.new',
  { path: 'ember-flexberry-dummy-suggestion-type-edit/new' });
  this.route('ember-flexberry-dummy-test-poly-another-child-list');
  this.route('ember-flexberry-dummy-test-poly-another-child-edit',
  { path: 'ember-flexberry-dummy-test-poly-another-child-edit/:id' });
  this.route('ember-flexberry-dummy-test-poly-another-child-edit.new',
  { path: 'ember-flexberry-dummy-test-poly-another-child-edit/new' });
  this.route('ember-flexberry-dummy-test-poly-child-list');
  this.route('ember-flexberry-dummy-test-poly-child-edit',
  { path: 'ember-flexberry-dummy-test-poly-child-edit/:id' });
  this.route('ember-flexberry-dummy-test-poly-child-edit.new',
  { path: 'ember-flexberry-dummy-test-poly-child-edit/new' });
  this.route('ember-flexberry-dummy-test-poly-list');
  this.route('ember-flexberry-dummy-test-poly-edit',
  { path: 'ember-flexberry-dummy-test-poly-edit/:id' });
  this.route('ember-flexberry-dummy-test-poly-edit.new',
  { path: 'ember-flexberry-dummy-test-poly-edit/new' });
  this.route('event-l');
  this.route('event-e',
  { path: 'event-e/:id' });
  this.route('event-e.new',
  { path: 'event-e/new' });
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('reg-object-l');
  this.route('reg-object-e',
  { path: 'reg-object-e/:id' });
  this.route('reg-object-e.new',
  { path: 'reg-object-e/new' });
});

export default Router;
