const withLess = require('@zeit/next-less'); // 支持less
// const withTypescript = require('@zeit/next-typescript'); //next提醒已经内置了ts,不需要这个插件了
const withPlugins = require('next-compose-plugins/lib'); //结合支持多插件配置
const withCss = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}
const conf = {
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  // 文件输出目录
  distDir: 'build'
  // （重要配置）手动修改webpack config
  // webpack(config, options) {
  //   return config;
  // }
  // generateEtags: false,
  // generateBuildId: async () => {
  //   return 'build-' + Date.now();
  // }
};
module.exports = withPlugins([withLess(conf), withCss]);
// module.exports =  withLess(conf);
