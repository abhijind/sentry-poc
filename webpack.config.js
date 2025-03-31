const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = {
  // ... other config above ...

  devtool: "source-map", // Source map generation must be turned on
  plugins: [
    sentryWebpackPlugin({
      debug: true,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      filesToDeleteAfterUpload: ['dist/sentry-poc/*.js.map'],
      deleteAfterCompile: true,
    }),
  ],
};
