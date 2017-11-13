import { Model as TestPolyBaseMixin } from
  '../mixins/regenerated/models/ember-flexberry-dummy-test-poly-base';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, TestPolyBaseMixin, {

});
export default Model;
