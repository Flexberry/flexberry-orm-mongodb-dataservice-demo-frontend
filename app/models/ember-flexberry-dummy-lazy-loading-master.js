import { Model as LazyLoadingMasterMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-lazy-loading-master';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LazyLoadingMasterMixin, {

});
defineProjections(Model);
export default Model;
