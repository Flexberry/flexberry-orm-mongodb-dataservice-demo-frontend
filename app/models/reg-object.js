import { Model as RegObjectMixin, defineProjections } from
  '../mixins/regenerated/models/reg-object';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, RegObjectMixin, {

});
defineProjections(Model);
export default Model;
