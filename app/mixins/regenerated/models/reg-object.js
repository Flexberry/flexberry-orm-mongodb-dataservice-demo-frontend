import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  objectId: DS.attr('number'),
  town: DS.attr('string'),
  objectName: DS.attr('string'),
  address: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  actual: DS.attr('boolean'),
  createTime: DS.attr('date'),
  editTime: DS.attr('date'),
  cameras: DS.hasMany('camera', { inverse: 'regObject', async: false }),
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
  modelClass.defineProjection('RegObjectE', 'reg-object', {
    objectId: Projection.attr('Object id'),
    town: Projection.attr('Town'),
    objectName: Projection.attr('Object name'),
    address: Projection.attr('Address'),
    latitude: Projection.attr('Latitude'),
    longitude: Projection.attr('Longitude'),
    actual: Projection.attr('Actual'),
    createTime: Projection.attr('Create time'),
    editTime: Projection.attr('Edit time'),
    cameras: Projection.hasMany('camera', 'Cameras', {
      cameraId: Projection.attr('Camera id'),
      groupId: Projection.attr('Group id'),
      groupName: Projection.attr('Group name'),
      actual: Projection.attr('Actual'),
      createTime: Projection.attr('Create time'),
      editTime: Projection.attr('Edit time')
    })
  });
  modelClass.defineProjection('RegObjectL', 'reg-object', {
    objectId: Projection.attr('Object id'),
    town: Projection.attr('Town'),
    objectName: Projection.attr('Object name'),
    address: Projection.attr('Address'),
    latitude: Projection.attr('Latitude'),
    longitude: Projection.attr('Longitude'),
    actual: Projection.attr('Actual'),
    createTime: Projection.attr('Create time'),
    editTime: Projection.attr('Edit time')
  });
};
