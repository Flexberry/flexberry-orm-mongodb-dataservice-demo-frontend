import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Flexberry orm mongo db data service demo',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Flexberry orm mongo db data service demo',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Flexberry orm mongo db data service demo',
          title: 'Flexberry orm mongo db data service demo'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'flexberry-orm-mongo-db-data-service-demo': {
          caption: 'FlexberryOrmMongoDbDataServiceDemo',
          title: 'FlexberryOrmMongoDbDataServiceDemo',
          'reg-object-l': {
            caption: 'Reg object',
            title: '',

          },
          'event-l': {
            caption: 'Event',
            title: '',

          }
        },
        application: {
          caption: 'Application',
          title: 'Application',
          'ember-flexberry-dummy-application-user-list': {
            caption: 'Application Users',
            title: '',

          },
          'ember-flexberry-dummy-localization-list': {
            caption: 'Localizations',
            title: '',

          },
          'ember-flexberry-dummy-suggestion-list': {
            caption: 'Suggestions',
            title: '',

          },
          'ember-flexberry-dummy-suggestion-type-list': {
            caption: 'Suggestion types',
            title: '',

          },
          'ember-flexberry-dummy-test-poly-child-list': {
            caption: 'TestPolyChildList',
            title: '',

          },
          'ember-flexberry-dummy-test-poly-list': {
            caption: 'TestPolyList',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
