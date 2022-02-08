const  HTMLPlugin = require('html-webpack-plugin');


const path = require('path')

module.exports = {
    entry: {
        main: [path.resolve(__dirname, 'src/index.js')],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
  },
  plugins: [
   new HTMLPlugin({
       title: 'webpack Boilerplate',
       template: path.resolve(__dirname, 'src/template.html'), // шаблон
       filename: 'index.html', // название выходного файла
   }),
  ],
  devServer: {
   static: {
     directory: path.join(__dirname, 'dist'),
   },
   compress: true,
   port: 9000,
   open:true,
  },
 resolve: {
         extensions: ['.js']
      },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  }

}




// module.exports = {
//    entry : ['/src/index.js'],
//    output: {
//       path: __dirname + '/dist',
//       filename: 'bundle.js'
//    },
//    devServer: {
//       static: {
//         directory: path.join(__dirname, '/dist'),
//       },
//       compress: true,
//       port: 9000,
//     },
//    plugins: [
//       new HTMLPlugin({
//          filename: 'inex.html',
//          tamplate:'./src/index.html'
//       })
//    ],
//    resolve: {
//       extensions: ['.js']
//    }
// }