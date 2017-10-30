define('ember-app/tests/adapters/application-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - adapters');
  test('adapters/application-offline.js should pass jscs', function () {
    ok(true, 'adapters/application-offline.js should pass jscs.');
  });
});
define('ember-app/tests/adapters/application-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass jshint.');
  });
});
define('ember-app/tests/adapters/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - adapters');
  test('adapters/application.js should pass jscs', function () {
    ok(true, 'adapters/application.js should pass jscs.');
  });
});
define('ember-app/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ember-app/tests/app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('app.js should pass jscs', function () {
    ok(true, 'app.js should pass jscs.');
  });
});
define('ember-app/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/application.js should pass jscs', function () {
    ok(false, 'controllers/application.js should pass jscs.\nLine must be at most 160 characters at controllers/application.js :\n    18 |          children: [{\n    19 |            link: \'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l\',\n    20 |            caption: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.caption\'),\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n    21 |            title: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.title\'),\n    22 |            children: null\nLine must be at most 160 characters at controllers/application.js :\n    19 |            link: \'new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l\',\n    20 |            caption: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.caption\'),\n    21 |            title: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.title\'),\n---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n    22 |            children: null\n    23 |          }, {\nLine must be at most 160 characters at controllers/application.js :\n    23 |          }, {\n    24 |            link: \'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l\',\n    25 |            caption: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.caption\'),\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n    26 |            title: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.title\'),\n    27 |            children: null\nLine must be at most 160 characters at controllers/application.js :\n    24 |            link: \'new-platform-flexberry-orm-mongo-db-data-service-demo-event-l\',\n    25 |            caption: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.caption\'),\n    26 |            title: i18n.t(\'forms.application.sitemap.flexberry-orm-mongo-db-data-service-demo.new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.title\'),\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n    27 |            children: null\n    28 |          }]');
  });
});
define('ember-app/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs', function () {
    ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs', function () {
    ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e');
  test('controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js should pass jscs', function () {
    ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs', function () {
    ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs', function () {
    ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e');
  test('controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js should pass jscs', function () {
    ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs', function () {
    ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jshint.');
  });
});
define('ember-app/tests/controllers/sitemap-node.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/sitemap-node.js should pass jscs', function () {
    ok(true, 'controllers/sitemap-node.js should pass jscs.');
  });
});
define('ember-app/tests/controllers/sitemap-node.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/sitemap-node.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/sitemap-node.js should pass jshint.');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/destroy-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/destroy-app.js should pass jscs', function () {
    ok(true, 'helpers/destroy-app.js should pass jscs.');
  });
});
define('ember-app/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _emberAppTestsHelpersStartApp, _emberAppTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberAppTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-app/tests/helpers/module-for-acceptance.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/module-for-acceptance.js should pass jscs', function () {
    ok(true, 'helpers/module-for-acceptance.js should pass jscs.');
  });
});
define('ember-app/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-app/tests/helpers/resolver', ['exports', 'ember-app/resolver', 'ember-app/config/environment'], function (exports, _emberAppResolver, _emberAppConfigEnvironment) {

  var resolver = _emberAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-app/tests/helpers/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/resolver.js should pass jscs', function () {
    ok(true, 'helpers/resolver.js should pass jscs.');
  });
});
define('ember-app/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember', 'ember-app/app', 'ember-app/config/environment'], function (exports, _ember, _emberAppApp, _emberAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-app/tests/helpers/start-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/start-app.js should pass jscs', function () {
    ok(true, 'helpers/start-app.js should pass jscs.');
  });
});
define('ember-app/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-app/tests/helpers/validate-properties', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {
  exports.testValidPropertyValues = testValidPropertyValues;
  exports.testInvalidPropertyValues = testInvalidPropertyValues;

  var run = _ember['default'].run;

  function validateValues(object, propertyName, values, isTestForValid) {
    var promise = null;
    var validatedValues = [];

    values.forEach(function (value) {
      function handleValidation(errors) {
        var hasErrors = object.get('errors.' + propertyName + '.firstObject');
        if (hasErrors && !isTestForValid || !hasErrors && isTestForValid) {
          validatedValues.push(value);
        }
      }

      run(object, 'set', propertyName, value);

      var objectPromise = null;
      run(function () {
        objectPromise = object.validate().then(handleValidation, handleValidation);
      });

      // Since we are setting the values in a different run loop as we are validating them,
      // we need to chain the promises so that they run sequentially. The wrong value will
      // be validated if the promises execute concurrently
      promise = promise ? promise.then(objectPromise) : objectPromise;
    });

    return promise.then(function () {
      return validatedValues;
    });
  }

  function testPropertyValues(propertyName, values, isTestForValid, context) {
    var validOrInvalid = isTestForValid ? 'Valid' : 'Invalid';
    var testName = validOrInvalid + ' ' + propertyName;

    (0, _emberQunit.test)(testName, function (assert) {
      var object = this.subject();

      if (context && typeof context === 'function') {
        context(object);
      }

      // Use QUnit.dump.parse so null and undefined can be printed as literal 'null' and
      // 'undefined' strings in the assert message.
      var valuesString = QUnit.dump.parse(values).replace(/\n(\s+)?/g, '').replace(/,/g, ', ');
      var assertMessage = 'Expected ' + propertyName + ' to have ' + validOrInvalid.toLowerCase() + ' values: ' + valuesString;

      return validateValues(object, propertyName, values, isTestForValid).then(function (validatedValues) {
        assert.deepEqual(validatedValues, values, assertMessage);
      });
    });
  }

  function testValidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, true, context);
  }

  function testInvalidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, false, context);
  }
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/forms');
  test('locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs', function () {
    ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/forms');
  test('locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs', function () {
    ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/forms');
  test('locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs', function () {
    ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/forms');
  test('locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs', function () {
    ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/forms');
  test('locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs', function () {
    ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/models/camera.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/models');
  test('locales/en/models/camera.js should pass jscs', function () {
    ok(true, 'locales/en/models/camera.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/models/camera.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/models/camera.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/camera.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/models');
  test('locales/en/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs', function () {
    ok(true, 'locales/en/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/models/reg-object.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en/models');
  test('locales/en/models/reg-object.js should pass jscs', function () {
    ok(true, 'locales/en/models/reg-object.js should pass jscs.');
  });
});
define('ember-app/tests/locales/en/models/reg-object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/models/reg-object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/reg-object.js should pass jshint.');
  });
});
define('ember-app/tests/locales/en/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en');
  test('locales/en/translations.js should pass jscs', function () {
    ok(false, 'locales/en/translations.js should pass jscs.\nExtra quotes for key at locales/en/translations.js :\n    16 |Ember.$.extend(true, translations, {\n    17 |  models: {\n    18 |    \'camera\': CameraModel,\n------------^\n    19 |    \'new-platform-flexberry-orm-mongo-db-data-service-demo-event\': NewPlatformFlexberryOrmMongoDbDataServiceDemoEventModel,\n    20 |    \'reg-object\': RegObjectModel,');
  });
});
define('ember-app/tests/locales/en/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/forms');
  test('locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs', function () {
    ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/forms');
  test('locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs', function () {
    ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/forms');
  test('locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs', function () {
    ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/forms');
  test('locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs', function () {
    ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/forms');
  test('locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs', function () {
    ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/models/camera.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/models');
  test('locales/ru/models/camera.js should pass jscs', function () {
    ok(true, 'locales/ru/models/camera.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/models/camera.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/models/camera.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/camera.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/models');
  test('locales/ru/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs', function () {
    ok(true, 'locales/ru/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/models/reg-object.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru/models');
  test('locales/ru/models/reg-object.js should pass jscs', function () {
    ok(true, 'locales/ru/models/reg-object.js should pass jscs.');
  });
});
define('ember-app/tests/locales/ru/models/reg-object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/models/reg-object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/reg-object.js should pass jshint.');
  });
});
define('ember-app/tests/locales/ru/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru');
  test('locales/ru/translations.js should pass jscs', function () {
    ok(false, 'locales/ru/translations.js should pass jscs.\nExtra quotes for key at locales/ru/translations.js :\n    16 |Ember.$.extend(true, translations, {\n    17 |  models: {\n    18 |    \'camera\': CameraModel,\n------------^\n    19 |    \'new-platform-flexberry-orm-mongo-db-data-service-demo-event\': NewPlatformFlexberryOrmMongoDbDataServiceDemoEventModel,\n    20 |    \'reg-object\': RegObjectModel,');
  });
});
define('ember-app/tests/locales/ru/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - locales/ru/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/models/camera.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/models');
  test('mixins/regenerated/models/camera.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/models/camera.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/models/camera.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/models/camera.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/camera.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/models');
  test('mixins/regenerated/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/models/reg-object.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/models');
  test('mixins/regenerated/models/reg-object.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/models/reg-object.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/models/reg-object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/models/reg-object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/reg-object.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/camera-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/serializers');
  test('mixins/regenerated/serializers/camera-offline.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/serializers/camera-offline.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/camera-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/serializers/camera-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/camera-offline.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/camera.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/serializers');
  test('mixins/regenerated/serializers/camera.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/serializers/camera.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/camera.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/serializers/camera.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/camera.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/serializers');
  test('mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/serializers');
  test('mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/reg-object-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/serializers');
  test('mixins/regenerated/serializers/reg-object-offline.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/serializers/reg-object-offline.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/reg-object-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/serializers/reg-object-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/reg-object-offline.js should pass jshint.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/reg-object.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins/regenerated/serializers');
  test('mixins/regenerated/serializers/reg-object.js should pass jscs', function () {
    ok(true, 'mixins/regenerated/serializers/reg-object.js should pass jscs.');
  });
});
define('ember-app/tests/mixins/regenerated/serializers/reg-object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/regenerated/serializers/reg-object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/reg-object.js should pass jshint.');
  });
});
define('ember-app/tests/models/camera.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/camera.js should pass jscs', function () {
    ok(true, 'models/camera.js should pass jscs.');
  });
});
define('ember-app/tests/models/camera.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/camera.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/camera.js should pass jshint.');
  });
});
define('ember-app/tests/models/custom-inflector-rules.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/custom-inflector-rules.js should pass jscs', function () {
    ok(true, 'models/custom-inflector-rules.js should pass jscs.');
  });
});
define('ember-app/tests/models/custom-inflector-rules.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/custom-inflector-rules.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass jshint.');
  });
});
define('ember-app/tests/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs', function () {
    ok(true, 'models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs.');
  });
});
define('ember-app/tests/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jshint.');
  });
});
define('ember-app/tests/models/reg-object.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/reg-object.js should pass jscs', function () {
    ok(true, 'models/reg-object.js should pass jscs.');
  });
});
define('ember-app/tests/models/reg-object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/reg-object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/reg-object.js should pass jshint.');
  });
});
define('ember-app/tests/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('resolver.js should pass jscs', function () {
    ok(true, 'resolver.js should pass jscs.');
  });
});
define('ember-app/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-app/tests/router.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('router.js should pass jscs', function () {
    ok(true, 'router.js should pass jscs.');
  });
});
define('ember-app/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-app/tests/routes/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/application.js should pass jscs', function () {
    ok(true, 'routes/application.js should pass jscs.');
  });
});
define('ember-app/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('ember-app/tests/routes/index.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/index.js should pass jscs', function () {
    ok(true, 'routes/index.js should pass jscs.');
  });
});
define('ember-app/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs', function () {
    ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jscs.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l.js should pass jshint.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs', function () {
    ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jscs.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e.js should pass jshint.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e');
  test('routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js should pass jscs', function () {
    ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js should pass jscs.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e/new.js should pass jshint.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs', function () {
    ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jscs.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l.js should pass jshint.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs', function () {
    ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jscs.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e.js should pass jshint.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e');
  test('routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js should pass jscs', function () {
    ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js should pass jscs.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e/new.js should pass jshint.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs', function () {
    ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jscs.');
  });
});
define('ember-app/tests/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/application-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/application-offline.js should pass jscs', function () {
    ok(true, 'serializers/application-offline.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/application-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/application-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/application.js should pass jscs', function () {
    ok(true, 'serializers/application.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/camera-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/camera-offline.js should pass jscs', function () {
    ok(true, 'serializers/camera-offline.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/camera-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/camera-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/camera-offline.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/camera.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/camera.js should pass jscs', function () {
    ok(true, 'serializers/camera.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/camera.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/camera.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/camera.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js should pass jscs', function () {
    ok(true, 'serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-offline.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs', function () {
    ok(true, 'serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/reg-object-offline.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/reg-object-offline.js should pass jscs', function () {
    ok(true, 'serializers/reg-object-offline.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/reg-object-offline.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/reg-object-offline.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/reg-object-offline.js should pass jshint.');
  });
});
define('ember-app/tests/serializers/reg-object.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/reg-object.js should pass jscs', function () {
    ok(true, 'serializers/reg-object.js should pass jscs.');
  });
});
define('ember-app/tests/serializers/reg-object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/reg-object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/reg-object.js should pass jshint.');
  });
});
define('ember-app/tests/services/store.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - services');
  test('services/store.js should pass jscs', function () {
    ok(true, 'services/store.js should pass jscs.');
  });
});
define('ember-app/tests/services/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass jshint.');
  });
});
define('ember-app/tests/test-helper', ['exports', 'ember-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberAppTestsHelpersResolver['default']);
});
define('ember-app/tests/test-helper.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('test-helper.js should pass jscs', function () {
    ok(true, 'test-helper.js should pass jscs.');
  });
});
define('ember-app/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l', 'Unit | Controller | new platform flexberry orm mongo db data service demo camera l', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/controllers');
  test('unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js should pass jscs', function () {
    ok(false, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js should pass jscs.\nLine must be at most 160 characters at unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'controller:new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l\', \'Unit | Controller | new platform flexberry orm mongo db data service demo camera l\', {\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:new-platform-flexberry-orm-mongo-db-data-service-demo-event-e', 'Unit | Controller | new platform flexberry orm mongo db data service demo event e', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/controllers');
  test('unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js should pass jscs', function () {
    ok(false, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js should pass jscs.\nLine must be at most 160 characters at unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'controller:new-platform-flexberry-orm-mongo-db-data-service-demo-event-e\', \'Unit | Controller | new platform flexberry orm mongo db data service demo event e\', {\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:new-platform-flexberry-orm-mongo-db-data-service-demo-event-l', 'Unit | Controller | new platform flexberry orm mongo db data service demo event l', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/controllers');
  test('unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js should pass jscs', function () {
    ok(false, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js should pass jscs.\nLine must be at most 160 characters at unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'controller:new-platform-flexberry-orm-mongo-db-data-service-demo-event-l\', \'Unit | Controller | new platform flexberry orm mongo db data service demo event l\', {\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e', 'Unit | Controller | new platform flexberry orm mongo db data service demo reg object e', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/controllers');
  test('unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js should pass jscs', function () {
    ok(false, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js should pass jscs.\nLine must be at most 160 characters at unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'controller:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e\', \'Unit | Controller | new platform flexberry orm mongo db data service demo reg object e\', {\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l', 'Unit | Controller | new platform flexberry orm mongo db data service demo reg object l', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/controllers');
  test('unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js should pass jscs', function () {
    ok(false, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js should pass jscs.\nLine must be at most 160 characters at unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'controller:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l\', \'Unit | Controller | new platform flexberry orm mongo db data service demo reg object l\', {\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/models/camera-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('camera', 'Unit | Model | camera', {
    // Specify the other units that are required for this test.
    needs: ['model:camera', 'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'model:reg-object']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/camera-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/models');
  test('unit/models/camera-test.js should pass jscs', function () {
    ok(true, 'unit/models/camera-test.js should pass jscs.');
  });
});
define('ember-app/tests/unit/models/camera-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/camera-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/camera-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'Unit | Model | new-platform-flexberry-orm-mongo-db-data-service-demo-event', {
    // Specify the other units that are required for this test.
    needs: ['model:camera', 'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'model:reg-object']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/models');
  test('unit/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js should pass jscs', function () {
    ok(true, 'unit/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js should pass jscs.');
  });
});
define('ember-app/tests/unit/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/models/reg-object-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('reg-object', 'Unit | Model | reg-object', {
    // Specify the other units that are required for this test.
    needs: ['model:camera', 'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'model:reg-object']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/reg-object-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/models');
  test('unit/models/reg-object-test.js should pass jscs', function () {
    ok(true, 'unit/models/reg-object-test.js should pass jscs.');
  });
});
define('ember-app/tests/unit/models/reg-object-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/reg-object-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/reg-object-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l', 'Unit | Route | new platform flexberry orm mongo db data service demo camera l', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js should pass jscs', function () {
    ok(false, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js should pass jscs.\nLine must be at most 160 characters at unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'route:new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l\', \'Unit | Route | new platform flexberry orm mongo db data service demo camera l\', {\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-camera-l-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:new-platform-flexberry-orm-mongo-db-data-service-demo-event-e', 'Unit | Route | new platform flexberry orm mongo db data service demo event e', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js should pass jscs', function () {
    ok(false, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js should pass jscs.\nLine must be at most 160 characters at unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'route:new-platform-flexberry-orm-mongo-db-data-service-demo-event-e\', \'Unit | Route | new platform flexberry orm mongo db data service demo event e\', {\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-e-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:new-platform-flexberry-orm-mongo-db-data-service-demo-event-l', 'Unit | Route | new platform flexberry orm mongo db data service demo event l', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js should pass jscs', function () {
    ok(false, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js should pass jscs.\nLine must be at most 160 characters at unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'route:new-platform-flexberry-orm-mongo-db-data-service-demo-event-l\', \'Unit | Route | new platform flexberry orm mongo db data service demo event l\', {\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-event-l-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e', 'Unit | Route | new platform flexberry orm mongo db data service demo reg object e', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js should pass jscs', function () {
    ok(false, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js should pass jscs.\nLine must be at most 160 characters at unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'route:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e\', \'Unit | Route | new platform flexberry orm mongo db data service demo reg object e\', {\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-e-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l', 'Unit | Route | new platform flexberry orm mongo db data service demo reg object l', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/routes');
  test('unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js should pass jscs', function () {
    ok(false, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js should pass jscs.\nLine must be at most 160 characters at unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js :\n     1 |import { moduleFor, test } from \'ember-qunit\';\n     2 |\n     3 |moduleFor(\'route:new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l\', \'Unit | Route | new platform flexberry orm mongo db data service demo reg object l\', {\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  // needs: [\'controller:foo\']');
  });
});
define('ember-app/tests/unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-platform-flexberry-orm-mongo-db-data-service-demo-reg-object-l-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/serializers/camera-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('camera', 'Unit | Serializer | camera', {
    // Specify the other units that are required for this test.
    needs: ['serializer:camera', 'transform:file', 'transform:decimal', 'model:camera', 'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'model:reg-object']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/camera-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/serializers');
  test('unit/serializers/camera-test.js should pass jscs', function () {
    ok(true, 'unit/serializers/camera-test.js should pass jscs.');
  });
});
define('ember-app/tests/unit/serializers/camera-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers/camera-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/camera-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'Unit | Serializer | new-platform-flexberry-orm-mongo-db-data-service-demo-event', {
    // Specify the other units that are required for this test.
    needs: ['serializer:new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'transform:file', 'transform:decimal', 'model:camera', 'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'model:reg-object']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/serializers');
  test('unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js should pass jscs', function () {
    ok(false, 'unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js should pass jscs.\nLine must be at most 160 characters at unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js :\n     1 |import { moduleForModel, test } from \'ember-qunit\';\n     2 |\n     3 |moduleForModel(\'new-platform-flexberry-orm-mongo-db-data-service-demo-event\', \'Unit | Serializer | new-platform-flexberry-orm-mongo-db-data-service-demo-event\', {\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------^\n     4 |  // Specify the other units that are required for this test.\n     5 |  needs: [');
  });
});
define('ember-app/tests/unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/new-platform-flexberry-orm-mongo-db-data-service-demo-event-test.js should pass jshint.');
  });
});
define('ember-app/tests/unit/serializers/reg-object-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('reg-object', 'Unit | Serializer | reg-object', {
    // Specify the other units that are required for this test.
    needs: ['serializer:reg-object', 'transform:file', 'transform:decimal', 'model:camera', 'model:new-platform-flexberry-orm-mongo-db-data-service-demo-event', 'model:reg-object']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/reg-object-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/serializers');
  test('unit/serializers/reg-object-test.js should pass jscs', function () {
    ok(true, 'unit/serializers/reg-object-test.js should pass jscs.');
  });
});
define('ember-app/tests/unit/serializers/reg-object-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers/reg-object-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/reg-object-test.js should pass jshint.');
  });
});
define('ember-app/tests/views/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - views');
  test('views/application.js should pass jscs', function () {
    ok(true, 'views/application.js should pass jscs.');
  });
});
define('ember-app/tests/views/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - views/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'views/application.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
