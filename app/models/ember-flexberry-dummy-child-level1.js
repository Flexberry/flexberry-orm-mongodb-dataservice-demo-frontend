import { Model as ChildLevel1Mixin, defineProjections, defineBaseModel  } from
  '../mixins/regenerated/models/ember-flexberry-dummy-child-level1';
import SuggestionModel from './ember-flexberry-dummy-suggestion';

let Model = SuggestionModel.extend(ChildLevel1Mixin, {

});
defineBaseModel(Model);
defineProjections(Model);
export default Model;
