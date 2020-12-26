const webpack = require('webpack');
const path = require('path');

const config = {
   entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
         {
            test: /\.less$/,
            use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
         {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: [{
               loader: 'url-loader',
               options: {
                  limit: 1000 // in bytes
               }
              }]

        }
      ]
   },
   resolveLoader: {
      modules: [
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
   },
   resolve: {
      modules: [
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ],
      extensions: [
      '.js',
      '.jsx'
    ],
      alias: {
         'react-dom': '@hot-loader/react-dom'
      }
   },
   devServer: {
      port: 9950,
      contentBase: './dist',
      writeToDisk: true
   }
};

module.exports = config;