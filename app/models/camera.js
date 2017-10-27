import { Model as CameraMixin, defineProjections } from
  '../mixins/regenerated/models/camera';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, CameraMixin, {

});
defineProjections(Model);
export default Model;
