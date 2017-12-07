const path = require('path');

module.exports = {
  entry: './www/src/main.js',
  output: {
    path: path.resolve(__dirname, './www/public'),
    filename: 'app.bundle.js'
  },
  module:{
  	rules:[
  		{
  			test:/\.pug$/,use:'pug-loader'
  		},
  		{
		    test: /\.styl$/,
		    loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
		},
		{
		    test: /\.css$/,
		    loader: 'css-loader'
		},
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			loaders: [
	            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
	            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
	        ]
    	},
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  }
	]
  },
devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
};
