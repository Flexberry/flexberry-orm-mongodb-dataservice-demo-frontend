import { Serializer as MasterLookupDropdownSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-master-lookup-dropdown';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MasterLookupDropdownSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
