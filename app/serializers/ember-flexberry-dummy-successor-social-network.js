import { Serializer as SuccessorSocialNetworkSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-successor-social-network';
import ParentSerializer from './ember-flexberry-dummy-parent';

export default ParentSerializer.extend(SuccessorSocialNetworkSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
