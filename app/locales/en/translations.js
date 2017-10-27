import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
          'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l': {
            caption: 'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l',
            title: 'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l',

          },
          'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l': {
            caption: 'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l',
            title: 'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l',

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
    'new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l': NewPlatformFlexberryOrmMongoDbDataServiceDemoCameraLForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l': NewPlatformFlexberryOrmMongoDbDataServiceDemoEventLForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l': NewPlatformFlexberryOrmMongoDbDataServiceDemoRegObjectLForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-event-e': NewPlatformFlexberryOrmMongoDbDataServiceDemoEventEForm,
    'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e': NewPlatformFlexberryOrmMongoDbDataServiceDemoRegObjectEForm,
  },

});

export default translations;
