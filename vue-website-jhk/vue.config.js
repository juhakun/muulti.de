const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // module: {
  //   rules: [{ test: /\.mov$/, use: "file-loader" }],
  // },
  transpileDependencies: true,
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module
      .rule("mp4")
      .test(/\.mp4$/)
      .use("file-loader")
      .loader("file-loader")
      .end();
  },
});
