Package.describe({
  name: 'pbastowski:angular-templates',
  summary: 'Compile angular templates and return them as a string that can be imported',
  version: '1.3.2',
  git: 'https://github.com/pbastowski/angular-templates.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'compileNGTemplate',
  sources: [
    'plugin/ng-caching-html-compiler.js',
    'plugin/ng-html-scanner.js',
    'plugin/ng-template-compiler.js'
  ],
  use: [
    'caching-html-compiler@1.0.2',
    'ecmascript@0.1.6',
    'templating-tools@1.0.0',
    'underscore@1.0.4',
    'html-tools@1.0.5'
  ],
  npmDependencies : {
    'cheerio': '0.19.0',
    'html-minifier' : '0.6.9',
    'uglify-js': '2.4.24'
  }
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('isobuild:compiler-plugin@1.0.0');
  //api.use('angular-meteor-data@1.3.9', 'client', { weak: true });
  //api.use('angular:angular@1.4.8', 'client', { weak: true });

  // api.addFiles('templates-handler.js', 'client');
});
