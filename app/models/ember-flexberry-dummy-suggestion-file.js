import { Model as SuggestionFileMixin, defineProjections } from
  '../mixins/regenerated/models/ember-flexberry-dummy-suggestion-file';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, SuggestionFileMixin, {

});
defineProjections(Model);
export default Model;
