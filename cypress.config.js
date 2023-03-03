const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8mhvqx",
  viewportWidth: 1360,
  viewportHeight: 768,
  reporter: "cypress-multi-reporters",
  reporterOptions:{
    configFile: 'jsconfig.json'
  },
  video: false,
  retries: 0,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //global patter to determine which test to load
    specPattern: ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    baseUrl:"https://site-e2e-git-develop-nyla.vercel.app/products/qa",
    watchForFileChanges: false,
    }
  }
);
