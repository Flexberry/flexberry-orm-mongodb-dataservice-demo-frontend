import { Serializer as LazyLoadingDetailSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-lazy-loading-detail';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LazyLoadingDetailSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
