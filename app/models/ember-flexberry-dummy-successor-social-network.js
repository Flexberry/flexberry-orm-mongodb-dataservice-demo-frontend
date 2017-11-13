import { Model as SuccessorSocialNetworkMixin, defineProjections, defineBaseModel  } from
  '../mixins/regenerated/models/ember-flexberry-dummy-successor-social-network';
import ParentModel from './ember-flexberry-dummy-parent';

let Model = ParentModel.extend(SuccessorSocialNetworkMixin, {

});
defineBaseModel(Model);
defineProjections(Model);
export default Model;
