import { Serializer as LookupDropdownSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-lookup-dropdown';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LookupDropdownSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
