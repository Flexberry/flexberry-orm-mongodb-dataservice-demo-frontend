import { Serializer as TestPolyBaseSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-test-poly-base';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TestPolyBaseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
