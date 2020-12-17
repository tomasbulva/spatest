module.exports = function override(config, env) {
  console.log('config', config);
        config.output = {
            ...config.output, // copy all settings
            filename: "static/js/[name].js",
            chunkFilename: "static/js/[name].chunk.js",
        };
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
          cacheGroups: {
            default: false
          }
        };
        return config;
    };
