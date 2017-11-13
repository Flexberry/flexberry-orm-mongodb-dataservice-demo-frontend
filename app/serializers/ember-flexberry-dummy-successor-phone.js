import { Serializer as SuccessorPhoneSerializer } from
  '../mixins/regenerated/serializers/ember-flexberry-dummy-successor-phone';
import ParentSerializer from './ember-flexberry-dummy-parent';

export default ParentSerializer.extend(SuccessorPhoneSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
