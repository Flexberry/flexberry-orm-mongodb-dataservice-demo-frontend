import { Serializer as TestPolyAnotherChildSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-test-poly-another-child';
import TestPolyBaseSerializer from './ember-flexberry-dummy-test-poly-base';

export default TestPolyBaseSerializer.extend(TestPolyAnotherChildSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
