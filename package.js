Package.describe({
  name: 'maxedy:mongo-collection-instances',
  summary: 'Slightly modified version of (deprecated) dburles:mongo-collection-instances 0.3.5; create new collection if not exists',
  version: '1.0.0',
  git: 'https://github.com/MadMaxedy/mongo-collection-instances'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    'mongo',
    'underscore',
    'lai:collection-extensions@0.2.1_1']);
  api.addFiles('mongo-instances.js');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'accounts-base',
    'mongo',
    'dburles:mongo-collection-instances']);
  api.addFiles('mongo-instances-tests.js');
});
