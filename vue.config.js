const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  // github page
  publicPath: "/app_ui_vue2/",
  outputDir: "./docs",
});
