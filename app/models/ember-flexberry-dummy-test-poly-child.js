import { Model as TestPolyChildMixin, defineProjections, defineBaseModel  } from
  '../mixins/regenerated/models/ember-flexberry-dummy-test-poly-child';
import TestPolyBaseModel from './ember-flexberry-dummy-test-poly-base';

let Model = TestPolyBaseModel.extend(TestPolyChildMixin, {

});
defineBaseModel(Model);
defineProjections(Model);
export default Model;
