import { Serializer as ChildLevel2Serializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-child-level2';
import ChildLevel1Serializer from './ember-flexberry-dummy-child-level1';

export default ChildLevel1Serializer.extend(ChildLevel2Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
