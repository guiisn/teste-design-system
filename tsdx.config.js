/* eslint-disable @typescript-eslint/no-var-requires */
const importCSS = require('rollup-plugin-import-css');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      importCSS(),
    );
    return config;
  },
};
