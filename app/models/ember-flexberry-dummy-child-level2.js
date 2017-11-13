import { Model as ChildLevel2Mixin, defineProjections, defineBaseModel  } from
  '../mixins/regenerated/models/ember-flexberry-dummy-child-level2';
import ChildLevel1Model from './ember-flexberry-dummy-child-level1';

let Model = ChildLevel1Model.extend(ChildLevel2Mixin, {

});
defineBaseModel(Model);
defineProjections(Model);
export default Model;
