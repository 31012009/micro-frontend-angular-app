const path = require('path');
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'product',
  filename: 'remoteEntry.js',
  exposes: {
    './Routes': path.resolve(__dirname, './src/app/app.routes.ts')
    // './Component': path.resolve(__dirname, './src/app/app.component.ts')
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
