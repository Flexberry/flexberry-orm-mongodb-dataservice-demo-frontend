import { Model as TestPolyMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-test-poly';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, TestPolyMixin, {

});
defineProjections(Model);
export default Model;
