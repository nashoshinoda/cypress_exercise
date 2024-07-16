const { defineConfig } = require("cypress")
const cucumber = require("cypress-cucumber-preprocessor").default
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber())
      allureCypress(on,
        {
          resultsDir: "./cypress/reports/allure-results",
        }
      )
    },
    specPattern: "cypress/e2e/*.feature",
    screenshotsFolder: "cypress/reports/screenshots/",
  },
})
