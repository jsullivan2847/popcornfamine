const { override } = require('customize-cra');

module.exports = override((config) => {
  // Remove source-map-loader to avoid warnings about missing source maps
  config.module.rules = config.module.rules.filter(
    (rule) =>
      !(
        rule.loader &&
        rule.loader.includes('source-map-loader')
      )
  );

  return config;
});
