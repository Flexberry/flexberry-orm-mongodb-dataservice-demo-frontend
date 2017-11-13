import { Model as SuccessorPhoneMixin, defineProjections, defineBaseModel  } from
  '../mixins/regenerated/models/ember-flexberry-dummy-successor-phone';
import ParentModel from './ember-flexberry-dummy-parent';

let Model = ParentModel.extend(SuccessorPhoneMixin, {

});
defineBaseModel(Model);
defineProjections(Model);
export default Model;
