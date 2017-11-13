import Ember from 'ember';

export default Ember.Controller.extend({
  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.caption'),
          title: i18n.t('forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.title'),
          children: [{
            link: 'reg-object-l',
            caption: i18n.t('forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.reg-object-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.reg-object-l.title'),
            children: null
          }, {
            link: 'event-l',
            caption: i18n.t('forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.event-l.caption'),
            title: i18n.t('forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.event-l.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.application.caption'),
          title: i18n.t('forms.application.sitemap.application.title'),
          children: [{
            link: 'ember-flexberry-dummy-application-user-list',
            caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-application-user-list.caption'),
            title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-application-user-list.title'),
            children: null
          }, {
            link: 'ember-flexberry-dummy-localization-list',
            caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-localization-list.caption'),
            title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-localization-list.title'),
            children: null
          }, {
            link: 'ember-flexberry-dummy-suggestion-list',
            caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-list.caption'),
            title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-list.title'),
            children: null
          }, {
            link: 'ember-flexberry-dummy-suggestion-type-list',
            caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-type-list.caption'),
            title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-type-list.title'),
            children: null
          }, {
            link: 'ember-flexberry-dummy-test-poly-child-list',
            caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-child-list.caption'),
            title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-child-list.title'),
            children: null
          }, {
            link: 'ember-flexberry-dummy-test-poly-list',
            caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-list.caption'),
            title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-list.title'),
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: ['ru', 'en'],

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (Ember.isNone(i18n)) {
      return;
    }

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

  actions: {
    toggleSidebar() {
      let sidebar = Ember.$('.ui.sidebar.main.menu');
      let objectlistviewEventsService = this.get('objectlistviewEventsService');
      sidebar.sidebar({
        closable: false,
        dimPage: false,
        onHide: function() {
          Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
          Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        },
        onHidden: function() {
          objectlistviewEventsService.updateWidthTrigger();
        },
        onShow: function() {
          objectlistviewEventsService.updateWidthTrigger();
        }
      }).sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
      }

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.full.height').css({ transition: 'width 0.45s ease-in-out 0s', width: '100%' });
      } else {
        Ember.$('.full.height').css({ transition: 'width 0.3s ease-in-out 0s', width: 'calc(100% - ' + sidebar.width() + 'px)' });
      }
    },

    toggleSidebarMobile() {
      let sidebar = Ember.$('.ui.sidebar.main.menu');
      let objectlistviewEventsService = this.get('objectlistviewEventsService');
      sidebar.sidebar({
        onHide: function() {
          Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
          Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        },
        onHidden: function() {
          objectlistviewEventsService.updateWidthTrigger();
        },
        onShow: function() {
          objectlistviewEventsService.updateWidthTrigger();
        }
      }).sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        Ember.$('.bgw-opacity').addClass('hidden');
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
        Ember.$('.bgw-opacity').removeClass('hidden');
      }
    }
  }
});
