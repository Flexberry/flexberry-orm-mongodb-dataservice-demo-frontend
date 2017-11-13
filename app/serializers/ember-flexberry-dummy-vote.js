import { Serializer as VoteSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-vote';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(VoteSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
