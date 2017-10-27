import { Model as EventMixin, defineProjections } from
  '../mixins/regenerated/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, EventMixin, {

});
defineProjections(Model);
export default Model;
