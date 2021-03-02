'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      sourceMapEmbed: true,
      includePaths: [
        'node_modules/@appuniversum/appuniversum',
        'node_modules/@appuniversum/ember-appuniversum/app/styles'
      ]
    },
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true
    }
  });

  app.import('node_modules/@triply/yasgui/build/yasgui.min.css');
  app.import('node_modules/svgxuse/svgxuse.js');

  return app.toTree();
};
