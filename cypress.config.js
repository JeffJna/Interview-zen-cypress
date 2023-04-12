const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    projectId: "jgyeca",
    // reporter: "mochawesome",
    // reporterOptions: {
    //   reportDir: "cypress/results",
    //   overwrite: false,
    //   html: true,
    //   json: true,
    // },
    browser: "chrome",
    video: true,
    screenshot: true,
    baseUrl: "https://blogdoagi.com.br/",
    setupNodeEvents(on, config) {},
  },
});
