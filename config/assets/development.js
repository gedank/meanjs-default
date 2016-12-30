'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/css/bootstrap.css',
        'public/lib/bootstrap/css/bootstrap-theme.css'
      ],
      js: [
        'public/lib/jQuery/jQuery-2.2.0.min.js',
        'public/lib//jQueryUI/jquery-ui.min.js',
        'public/js/jquery-migrate-1.3.0.min.js',
        'public/lib/bootstrap/js/bootstrap.js',
        'public/lib/angular/angular.js',
        'public/lib/angular/angular-resource.js',
        'public/lib/angular/angular-animate.js',
        'public/lib/angular/angular-messages.js',
        'public/lib/angular-ui-router/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
