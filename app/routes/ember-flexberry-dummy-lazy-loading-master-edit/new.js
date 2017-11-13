import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'LazyLoadingMasterEdit',
  modelName: 'ember-flexberry-dummy-lazy-loading-master',
  templateName: 'ember-flexberry-dummy-lazy-loading-master-edit',
});
