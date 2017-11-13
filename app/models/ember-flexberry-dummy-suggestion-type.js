import { Model as SuggestionTypeMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-suggestion-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, SuggestionTypeMixin, {

});
defineProjections(Model);
export default Model;
