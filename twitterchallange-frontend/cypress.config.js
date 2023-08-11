const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        pause(ms) {
          return new Promise((resolve) => {
            // tasks should not resolve with undefined
            setTimeout(() => resolve(null), ms)
          })
        },
      })
    },
  },
})