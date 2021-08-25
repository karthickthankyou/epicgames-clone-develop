/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = function (on, config) {
  // configure plugins here
}
// // we require some code in our app that
// // is responsible for seeding our database
// const db = require('../../server/src/db')

// module.exports = (on, config) => {
//   on('task', {
//     'defaults:db': () => {
//       return db.seed('defaults')
//     },
//   })
// }
