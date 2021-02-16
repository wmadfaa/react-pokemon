const CracoEsbuildPlugin = require("craco-esbuild");

module.exports = {
  plugins: [{ plugin: CracoEsbuildPlugin }],
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("postcss-preset-env")({ stage: 0 })
      ]
    }
  }
};
