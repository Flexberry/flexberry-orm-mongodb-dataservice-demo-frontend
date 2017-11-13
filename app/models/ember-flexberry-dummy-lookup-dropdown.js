import { Model as LookupDropdownMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-lookup-dropdown';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, LookupDropdownMixin, {

});
defineProjections(Model);
export default Model;
