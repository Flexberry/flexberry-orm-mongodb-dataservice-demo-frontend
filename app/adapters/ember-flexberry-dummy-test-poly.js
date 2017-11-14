import ApplicationAdapter from './application';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  host: config.APP.backendUrls.bypassApi,
});
