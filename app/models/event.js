import { Model as EventMixin, defineProjections } from
  '../mixins/regenerated/models/event';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, EventMixin, {

});
defineProjections(Model);
export default Model;
