import { Serializer as LazyLoadingMasterSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-lazy-loading-master';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LazyLoadingMasterSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
