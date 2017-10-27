import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  cameraId: DS.attr('number'),
  groupId: DS.attr('number'),
  groupName: DS.attr('number'),
  actual: DS.attr('boolean'),
  createTime: DS.attr('date'),
  editTime: DS.attr('date'),
  regObject: DS.belongsTo('reg-object', { inverse: 'cameras', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      regObject: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CameraE', 'camera', {
    cameraId: Projection.attr('Camera id'),
    groupId: Projection.attr('Group id'),
    groupName: Projection.attr('Group name'),
    actual: Projection.attr('Actual'),
    createTime: Projection.attr('Create time'),
    editTime: Projection.attr('Edit time')
  });
  modelClass.defineProjection('CameraL', 'camera', {
    cameraId: Projection.attr('Camera id'),
    groupId: Projection.attr('Group id'),
    groupName: Projection.attr('Group name'),
    actual: Projection.attr('Actual'),
    createTime: Projection.attr('Create time'),
    editTime: Projection.attr('Edit time')
  });
};
