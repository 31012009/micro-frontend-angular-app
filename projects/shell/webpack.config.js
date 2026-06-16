const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    // "product": "http://localhost:4201/remoteEntry.js",
    // "account": "http://localhost:4202/remoteEntry.js",
    "product": 'https://product-app.netlify.app/remoteEntry.js',
    "account": 'https://account-mfe-app.netlify.app/remoteEntry.js'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
