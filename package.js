Package.describe({
  name: 'anonyfox:mmenu',
  version: '0.0.1',
  summary: 'Wrapper for http://mmenu.frebsite.nl/',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.use('mquandalle:bower@1.3.12_3')
  api.addFiles([
    "bower_components/jQuery.mmenu/dist/js/jquery.mmenu.min.all.js",
    "bower_components/jQuery.mmenu/dist/css/jquery.mmenu.all.css"
  ], 'client');
});