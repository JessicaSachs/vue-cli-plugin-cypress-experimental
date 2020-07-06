// https://github.com/bahmutov/cypress-vue-unit-test#install
const preprocessor = require('cypress-vue-unit-test/dist/plugins/webpack');
module.exports = (on, config) => {
  preprocessor(on, config);
  // IMPORTANT return the config object
  return config
};
