import { Model as MasterLookupDropdownMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-master-lookup-dropdown';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, MasterLookupDropdownMixin, {

});
defineProjections(Model);
export default Model;
