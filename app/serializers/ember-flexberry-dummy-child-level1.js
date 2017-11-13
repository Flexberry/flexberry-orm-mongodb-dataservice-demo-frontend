import { Serializer as ChildLevel1Serializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-child-level1';
import SuggestionSerializer from './ember-flexberry-dummy-suggestion';

export default SuggestionSerializer.extend(ChildLevel1Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
