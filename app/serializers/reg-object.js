import { Serializer as RegObjectSerializer } from
  '../mixins/regenerated/serializers/reg-object';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RegObjectSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
