/**
 * Arquivo: webpack.config.js
 * Descrição: Arquivo responsável por configurar o uso do React com o pacote do webpack
 * Data: 12/09/2016
 * Author: Glaucia Lemos
 */
module.exports = {
    entry: './main.js',
    output: {
        path: './'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};