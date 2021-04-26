const path = require('path')
module.exports = {
  // 模式
  mode: 'production', // 也可以使用 production \ development
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    globalObject: 'this',
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'x-utils.js',
    // 向外暴露的对象的名称
    library: 'xUtils',
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],   // 解析类的装饰器
              ["@babel/plugin-proposal-class-properties", { "loose": true }],  // 转化类的高级语法
              "@babel/plugin-transform-runtime"    // js语法检测及校验
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
      },
    ]
  }
}