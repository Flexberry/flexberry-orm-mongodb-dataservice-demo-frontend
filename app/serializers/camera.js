import { Serializer as CameraSerializer } from
  '../mixins/regenerated/serializers/camera';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CameraSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
