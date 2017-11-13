import { Model as LazyLoadingDetailMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-lazy-loading-detail';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LazyLoadingDetailMixin, {

});
defineProjections(Model);
export default Model;
