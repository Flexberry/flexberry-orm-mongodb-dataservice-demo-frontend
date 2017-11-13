import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  typeid: DS.attr('string'),
  photo_id: DS.attr('string'),
  timestamp: DS.attr('number'),
  datetime: DS.attr('date'),
  object_id: DS.attr('string'),
  camera_direction_id: DS.attr('number'),
  camera_id: DS.attr('string'),
  grz: DS.attr('string'),
  speed: DS.attr('number'),
  year: DS.attr('number'),
  month: DS.attr('number'),
  day: DS.attr('number'),
  hour: DS.attr('number'),
  min: DS.attr('number'),
  sec: DS.attr('number'),
  regObject: DS.belongsTo('reg-object', { inverse: null, async: false }),
  camera: DS.belongsTo('camera', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EventE', 'event', {
    typeid: Projection.attr('Typeid'),
    photo_id: Projection.attr('Photo_id'),
    timestamp: Projection.attr('Timestamp'),
    datetime: Projection.attr('Datetime'),
    object_id: Projection.attr('Object_id'),
    camera_direction_id: Projection.attr('Camera_direction_id'),
    camera_id: Projection.attr('Camera_id'),
    grz: Projection.attr('Grz'),
    speed: Projection.attr('Speed'),
    year: Projection.attr('Year'),
    month: Projection.attr('Month'),
    day: Projection.attr('Day'),
    hour: Projection.attr('Hour'),
    min: Projection.attr('Min'),
    sec: Projection.attr('Sec'),
    regObject: Projection.belongsTo('reg-object', 'Reg object', {
      town: Projection.attr('Town')
    }),
    camera: Projection.belongsTo('camera', 'Camera', {
      cameraId: Projection.attr('Camera id')
    })
  });
  modelClass.defineProjection('EventL', 'event', {
    typeid: Projection.attr('Typeid'),
    photo_id: Projection.attr('Photo_id'),
    timestamp: Projection.attr('Timestamp'),
    datetime: Projection.attr('Datetime'),
    object_id: Projection.attr('Object_id'),
    camera_direction_id: Projection.attr('Camera_direction_id'),
    camera_id: Projection.attr('Camera_id'),
    grz: Projection.attr('Grz'),
    speed: Projection.attr('Speed'),
    year: Projection.attr('Year'),
    month: Projection.attr('Month'),
    day: Projection.attr('Day'),
    hour: Projection.attr('Hour'),
    min: Projection.attr('Min'),
    sec: Projection.attr('Sec'),
    regObject: Projection.belongsTo('reg-object', 'Town', {
      town: Projection.attr('Town')
    }, { hidden: true }),
    camera: Projection.belongsTo('camera', 'Camera id', {
      cameraId: Projection.attr('Camera id')
    }, { hidden: true })
  });
};
