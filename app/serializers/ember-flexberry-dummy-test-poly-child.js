import { Serializer as TestPolyChildSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-test-poly-child';
import TestPolyBaseSerializer from './ember-flexberry-dummy-test-poly-base';

export default TestPolyBaseSerializer.extend(TestPolyChildSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
