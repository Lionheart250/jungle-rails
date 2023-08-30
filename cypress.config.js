// cypress/config/cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Your other Cypress configurations...

  e2e: {
    supportFile: false, // Disable support file for e2e tests
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // You can add custom logic before launching the browser
        // For example:
        // if (browser.name === 'chrome') {
        //   launchOptions.args.push('--some-flag');
        // }
      });
    },
    screenshotsFolder: "tmp/cypress_screenshots",
    videosFolder: "tmp/cypress_videos",
    trashAssetsBeforeRuns: false,
  },
});
