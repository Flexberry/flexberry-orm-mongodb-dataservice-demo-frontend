import { Model as SuggestionMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-suggestion';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, SuggestionMixin, {

});
defineProjections(Model);
export default Model;
