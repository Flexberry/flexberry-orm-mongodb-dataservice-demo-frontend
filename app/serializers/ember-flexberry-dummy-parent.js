import { Serializer as ParentSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-parent';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ParentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
