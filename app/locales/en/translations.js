import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import EmberFlexberryDummyApplicationUserListForm from './forms/ember-flexberry-dummy-application-user-list';
import EmberFlexberryDummyLazyLoadingMasterListForm from './forms/ember-flexberry-dummy-lazy-loading-master-list';
import EmberFlexberryDummyLocalizationListForm from './forms/ember-flexberry-dummy-localization-list';
import EmberFlexberryDummyStudyRecordObjListForm from './forms/ember-flexberry-dummy-study-record-obj-list';
import EmberFlexberryDummyStudyRecordSListForm from './forms/ember-flexberry-dummy-study-record-s-list';
import EmberFlexberryDummySuggestionListForm from './forms/ember-flexberry-dummy-suggestion-list';
import EmberFlexberryDummySuggestionTypeListForm from './forms/ember-flexberry-dummy-suggestion-type-list';
import EmberFlexberryDummyTestPolyAnotherChildListForm from './forms/ember-flexberry-dummy-test-poly-another-child-list';
import EmberFlexberryDummyTestPolyChildListForm from './forms/ember-flexberry-dummy-test-poly-child-list';
import EmberFlexberryDummyTestPolyListForm from './forms/ember-flexberry-dummy-test-poly-list';
import EventLForm from './forms/event-l';
import NewPlatformFlexberryOrmMongoDbDataServiceDemoCameraLForm from './forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l';
import RegObjectLForm from './forms/reg-object-l';
import EmberFlexberryDummyApplicationUserEditForm from './forms/ember-flexberry-dummy-application-user-edit';
import EmberFlexberryDummyChildLevel1EditForm from './forms/ember-flexberry-dummy-child-level1-edit';
import EmberFlexberryDummyChildLevel2EditForm from './forms/ember-flexberry-dummy-child-level2-edit';
import EmberFlexberryDummyCommentEditForm from './forms/ember-flexberry-dummy-comment-edit';
import EmberFlexberryDummyCommentVoteEditForm from './forms/ember-flexberry-dummy-comment-vote-edit';
import EmberFlexberryDummyGraduateRecordEditForm from './forms/ember-flexberry-dummy-graduate-record-edit';
import EmberFlexberryDummyLazyLoadingMasterEditForm from './forms/ember-flexberry-dummy-lazy-loading-master-edit';
import EmberFlexberryDummyLocalizationEditForm from './forms/ember-flexberry-dummy-localization-edit';
import EmberFlexberryDummyStudentRecordEditForm from './forms/ember-flexberry-dummy-student-record-edit';
import EmberFlexberryDummySuggestionEditForm from './forms/ember-flexberry-dummy-suggestion-edit';
import EmberFlexberryDummySuggestionTypeEditForm from './forms/ember-flexberry-dummy-suggestion-type-edit';
import EmberFlexberryDummyTestPolyAnotherChildEditForm from './forms/ember-flexberry-dummy-test-poly-another-child-edit';
import EmberFlexberryDummyTestPolyChildEditForm from './forms/ember-flexberry-dummy-test-poly-child-edit';
import EmberFlexberryDummyTestPolyEditForm from './forms/ember-flexberry-dummy-test-poly-edit';
import EventEForm from './forms/event-e';
import RegObjectEForm from './forms/reg-object-e';
import CameraModel from './models/camera';
import EmberFlexberryDummyApplicationUserModel from './models/ember-flexberry-dummy-application-user';
import EmberFlexberryDummyChildLevel1Model from './models/ember-flexberry-dummy-child-level1';
import EmberFlexberryDummyChildLevel2Model from './models/ember-flexberry-dummy-child-level2';
import EmberFlexberryDummyCommentVoteModel from './models/ember-flexberry-dummy-comment-vote';
import EmberFlexberryDummyCommentModel from './models/ember-flexberry-dummy-comment';
import EmberFlexberryDummyGraduateRecordModel from './models/ember-flexberry-dummy-graduate-record';
import EmberFlexberryDummyLazyLoadingDetailModel from './models/ember-flexberry-dummy-lazy-loading-detail';
import EmberFlexberryDummyLazyLoadingMasterModel from './models/ember-flexberry-dummy-lazy-loading-master';
import EmberFlexberryDummyLocalizationModel from './models/ember-flexberry-dummy-localization';
import EmberFlexberryDummyLocalizedSuggestionTypeModel from './models/ember-flexberry-dummy-localized-suggestion-type';
import EmberFlexberryDummyLookupDropdownModel from './models/ember-flexberry-dummy-lookup-dropdown';
import EmberFlexberryDummyMasterLookupDropdownModel from './models/ember-flexberry-dummy-master-lookup-dropdown';
import EmberFlexberryDummyParentModel from './models/ember-flexberry-dummy-parent';
import EmberFlexberryDummyStudentRecordModel from './models/ember-flexberry-dummy-student-record';
import EmberFlexberryDummyStudyRecordModel from './models/ember-flexberry-dummy-study-record';
import EmberFlexberryDummySuccessorPhoneModel from './models/ember-flexberry-dummy-successor-phone';
import EmberFlexberryDummySuccessorSocialNetworkModel from './models/ember-flexberry-dummy-successor-social-network';
import EmberFlexberryDummySuggestionFileModel from './models/ember-flexberry-dummy-suggestion-file';
import EmberFlexberryDummySuggestionTypeModel from './models/ember-flexberry-dummy-suggestion-type';
import EmberFlexberryDummySuggestionModel from './models/ember-flexberry-dummy-suggestion';
import EmberFlexberryDummyTestPolyAnotherChildModel from './models/ember-flexberry-dummy-test-poly-another-child';
import EmberFlexberryDummyTestPolyBaseModel from './models/ember-flexberry-dummy-test-poly-base';
import EmberFlexberryDummyTestPolyChildModel from './models/ember-flexberry-dummy-test-poly-child';
import EmberFlexberryDummyTestPolyModel from './models/ember-flexberry-dummy-test-poly';
import EmberFlexberryDummyVoteModel from './models/ember-flexberry-dummy-vote';
import EventModel from './models/event';
import RegObjectModel from './models/reg-object';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'camera': CameraModel,
    'ember-flexberry-dummy-application-user': EmberFlexberryDummyApplicationUserModel,
    'ember-flexberry-dummy-child-level1': EmberFlexberryDummyChildLevel1Model,
    'ember-flexberry-dummy-child-level2': EmberFlexberryDummyChildLevel2Model,
    'ember-flexberry-dummy-comment-vote': EmberFlexberryDummyCommentVoteModel,
    'ember-flexberry-dummy-comment': EmberFlexberryDummyCommentModel,
    'ember-flexberry-dummy-graduate-record': EmberFlexberryDummyGraduateRecordModel,
    'ember-flexberry-dummy-lazy-loading-detail': EmberFlexberryDummyLazyLoadingDetailModel,
    'ember-flexberry-dummy-lazy-loading-master': EmberFlexberryDummyLazyLoadingMasterModel,
    'ember-flexberry-dummy-localization': EmberFlexberryDummyLocalizationModel,
    'ember-flexberry-dummy-localized-suggestion-type': EmberFlexberryDummyLocalizedSuggestionTypeModel,
    'ember-flexberry-dummy-lookup-dropdown': EmberFlexberryDummyLookupDropdownModel,
    'ember-flexberry-dummy-master-lookup-dropdown': EmberFlexberryDummyMasterLookupDropdownModel,
    'ember-flexberry-dummy-parent': EmberFlexberryDummyParentModel,
    'ember-flexberry-dummy-student-record': EmberFlexberryDummyStudentRecordModel,
    'ember-flexberry-dummy-study-record': EmberFlexberryDummyStudyRecordModel,
    'ember-flexberry-dummy-successor-phone': EmberFlexberryDummySuccessorPhoneModel,
    'ember-flexberry-dummy-successor-social-network': EmberFlexberryDummySuccessorSocialNetworkModel,
    'ember-flexberry-dummy-suggestion-file': EmberFlexberryDummySuggestionFileModel,
    'ember-flexberry-dummy-suggestion-type': EmberFlexberryDummySuggestionTypeModel,
    'ember-flexberry-dummy-suggestion': EmberFlexberryDummySuggestionModel,
    'ember-flexberry-dummy-test-poly-another-child': EmberFlexberryDummyTestPolyAnotherChildModel,
    'ember-flexberry-dummy-test-poly-base': EmberFlexberryDummyTestPolyBaseModel,
    'ember-flexberry-dummy-test-poly-child': EmberFlexberryDummyTestPolyChildModel,
    'ember-flexberry-dummy-test-poly': EmberFlexberryDummyTestPolyModel,
    'ember-flexberry-dummy-vote': EmberFlexberryDummyVoteModel,
    'event': EventModel,
    'reg-object': RegObjectModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'flexberry-orm-mongo-db-data-service-demo': {
          caption: 'flexberry-orm-mongo-db-data-service-demo',
          title: 'flexberry-orm-mongo-db-data-service-demo',
          'reg-object-l': {
            caption: 'reg-object-l',
            title: 'reg-object-l',

          },
          'event-l': {
            caption: 'event-l',
            title: 'event-l',

          }
        },
        application: {
          caption: 'application',
          title: 'application',
          'ember-flexberry-dummy-application-user-list': {
            caption: 'ember-flexberry-dummy-application-user-list',
            title: 'ember-flexberry-dummy-application-user-list',

          },
          'ember-flexberry-dummy-localization-list': {
            caption: 'ember-flexberry-dummy-localization-list',
            title: 'ember-flexberry-dummy-localization-list',

          },
          'ember-flexberry-dummy-suggestion-list': {
            caption: 'ember-flexberry-dummy-suggestion-list',
            title: 'ember-flexberry-dummy-suggestion-list',

          },
          'ember-flexberry-dummy-suggestion-type-list': {
            caption: 'ember-flexberry-dummy-suggestion-type-list',
            title: 'ember-flexberry-dummy-suggestion-type-list',

          },
          'ember-flexberry-dummy-test-poly-child-list': {
            caption: 'ember-flexberry-dummy-test-poly-child-list',
            title: 'ember-flexberry-dummy-test-poly-child-list',

          },
          'ember-flexberry-dummy-test-poly-list': {
            caption: 'ember-flexberry-dummy-test-poly-list',
            title: 'ember-flexberry-dummy-test-poly-list',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'ember-flexberry-dummy-application-user-list': EmberFlexberryDummyApplicationUserListForm,
    'ember-flexberry-dummy-lazy-loading-master-list': EmberFlexberryDummyLazyLoadingMasterListForm,
    'ember-flexberry-dummy-localization-list': EmberFlexberryDummyLocalizationListForm,
    'ember-flexberry-dummy-study-record-obj-list': EmberFlexberryDummyStudyRecordObjListForm,
    'ember-flexberry-dummy-study-record-s-list': EmberFlexberryDummyStudyRecordSListForm,
    'ember-flexberry-dummy-suggestion-list': EmberFlexberryDummySuggestionListForm,
    'ember-flexberry-dummy-suggestion-type-list': EmberFlexberryDummySuggestionTypeListForm,
    'ember-flexberry-dummy-test-poly-another-child-list': EmberFlexberryDummyTestPolyAnotherChildListForm,
    'ember-flexberry-dummy-test-poly-child-list': EmberFlexberryDummyTestPolyChildListForm,
    'ember-flexberry-dummy-test-poly-list': EmberFlexberryDummyTestPolyListForm,
    'event-l': EventLForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l': NewPlatformFlexberryOrmMongoDbDataServiceDemoCameraLForm,
    'reg-object-l': RegObjectLForm,
    'ember-flexberry-dummy-application-user-edit': EmberFlexberryDummyApplicationUserEditForm,
    'ember-flexberry-dummy-child-level1-edit': EmberFlexberryDummyChildLevel1EditForm,
    'ember-flexberry-dummy-child-level2-edit': EmberFlexberryDummyChildLevel2EditForm,
    'ember-flexberry-dummy-comment-edit': EmberFlexberryDummyCommentEditForm,
    'ember-flexberry-dummy-comment-vote-edit': EmberFlexberryDummyCommentVoteEditForm,
    'ember-flexberry-dummy-graduate-record-edit': EmberFlexberryDummyGraduateRecordEditForm,
    'ember-flexberry-dummy-lazy-loading-master-edit': EmberFlexberryDummyLazyLoadingMasterEditForm,
    'ember-flexberry-dummy-localization-edit': EmberFlexberryDummyLocalizationEditForm,
    'ember-flexberry-dummy-student-record-edit': EmberFlexberryDummyStudentRecordEditForm,
    'ember-flexberry-dummy-suggestion-edit': EmberFlexberryDummySuggestionEditForm,
    'ember-flexberry-dummy-suggestion-type-edit': EmberFlexberryDummySuggestionTypeEditForm,
    'ember-flexberry-dummy-test-poly-another-child-edit': EmberFlexberryDummyTestPolyAnotherChildEditForm,
    'ember-flexberry-dummy-test-poly-child-edit': EmberFlexberryDummyTestPolyChildEditForm,
    'ember-flexberry-dummy-test-poly-edit': EmberFlexberryDummyTestPolyEditForm,
    'event-e': EventEForm,
    'reg-object-e': RegObjectEForm,
  },

});

export default translations;
