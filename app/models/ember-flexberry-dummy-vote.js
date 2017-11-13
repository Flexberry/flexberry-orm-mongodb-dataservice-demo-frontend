import { Model as VoteMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-vote';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, VoteMixin, {

});
defineProjections(Model);
export default Model;
