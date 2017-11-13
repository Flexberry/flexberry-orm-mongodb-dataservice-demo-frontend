import { Model as TestPolyAnotherChildMixin, defineProjections, defineBaseModel  } from
  '../mixins/regenerated/models/ember-flexberry-dummy-test-poly-another-child';
import TestPolyBaseModel from './ember-flexberry-dummy-test-poly-base';

let Model = TestPolyBaseModel.extend(TestPolyAnotherChildMixin, {

});
defineBaseModel(Model);
defineProjections(Model);
export default Model;
