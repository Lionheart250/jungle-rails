const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Your other Cypress configurations...

  supportFile: false, // Disable support file for all tests
  integrationFolder: 'cypress/integration', // Corrected path
  screenshotsFolder: 'tmp/cypress_screenshots',
  videosFolder: 'tmp/cypress_videos',
  trashAssetsBeforeRuns: false,
  
  // Custom function to set up browser launch options
  onBeforeBrowserLaunch(browser = {}, launchOptions) {
    // You can add custom logic before launching the browser
    // For example:
    // if (browser.name === 'chrome') {
    //   launchOptions.args.push('--some-flag');
    // }
  }
});
