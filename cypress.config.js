const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: "http://shop.bugred.ru",
    env: {
      baseUrl: 'http://shop.bugred.ru',
    },
    chromeWebSecurity: false,
  },
});
