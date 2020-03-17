const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry:['webpack/hot/poll?100','./src/index.ts'],
  watch: true,
  target:'node',
  externals:[
    nodeExternals({
      whitelist:['webpack/hot/poll?100']
    })
  ],
  module:{
    rules:[
      {
        test:/.tsx?$/,
        use:'ts-loader',
        exclude: /mode-modules/
      }
    ]
  },
  mode:'development',
  resolve:{
    extensions:['.tsx','.ts','.js'],
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['**/*'],
    })
  ],
  output:{
    path:path.join(__dirname,'dist'),
    filename:'index.js',
  },
}