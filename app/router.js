import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-event-l');
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-event-e',
  { path: 'new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/:id' });
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.new',
  { path: 'new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new' });
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l');
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e',
  { path: 'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/:id' });
  this.route('new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.new',
  { path: 'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new' });
});

export default Router;
