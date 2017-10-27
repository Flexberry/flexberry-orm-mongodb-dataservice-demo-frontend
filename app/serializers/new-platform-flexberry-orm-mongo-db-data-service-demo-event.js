import { Serializer as EventSerializer } from
  '../mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(EventSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
