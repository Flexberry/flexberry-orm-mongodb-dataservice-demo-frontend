import { Model as ParentMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-parent';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ParentMixin, {

});
defineProjections(Model);
export default Model;
