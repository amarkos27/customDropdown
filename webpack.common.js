const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    dropdown: {
      import: './src/dropdown.js',
      library: {
        name: 'amarkos-customdropdown',
        type: 'umd',
      },
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    globalObject: 'this',
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|jpg|jpeg|gif|png)/i,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Dropdown Menu',
    }),
  ],
};
