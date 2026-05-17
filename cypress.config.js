const { defineConfig } = require('cypress')

module.exports = defineConfig({

  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },

  video: true,

  screenshotOnRunFailure: true,

  e2e: {

    baseUrl: 'https://automationexercise.com',

    setupNodeEvents(on, config) {

      return config

    },

  },

})