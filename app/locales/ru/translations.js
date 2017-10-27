import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformFlexberryOrmMongoDbDataServiceDemoCameraLForm from './forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l';
import NewPlatformFlexberryOrmMongoDbDataServiceDemoEventLForm from './forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l';
import NewPlatformFlexberryOrmMongoDbDataServiceDemoRegObjectLForm from './forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l';
import NewPlatformFlexberryOrmMongoDbDataServiceDemoEventEForm from './forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e';
import NewPlatformFlexberryOrmMongoDbDataServiceDemoRegObjectEForm from './forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e';
import CameraModel from './models/camera';
import NewPlatformFlexberryOrmMongoDbDataServiceDemoEventModel from './models/new-platform-flexberry-orm-mongo-db-data-service-demo-event';
import RegObjectModel from './models/reg-object';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'camera': CameraModel,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-event': NewPlatformFlexberryOrmMongoDbDataServiceDemoEventModel,
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
          'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l': {
            caption: 'Reg object',
            title: '',

          },
          'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l': {
            caption: 'Event',
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
    'new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l': NewPlatformFlexberryOrmMongoDbDataServiceDemoCameraLForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l': NewPlatformFlexberryOrmMongoDbDataServiceDemoEventLForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l': NewPlatformFlexberryOrmMongoDbDataServiceDemoRegObjectLForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-event-e': NewPlatformFlexberryOrmMongoDbDataServiceDemoEventEForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e': NewPlatformFlexberryOrmMongoDbDataServiceDemoRegObjectEForm,
  },

});

export default translations;
