var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
	devtool: 'source-map',

	resolve: {
		extensions: ['.ts', '.js']
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html-loader'

			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'null-loader'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: 'null-loader'
	  		},
	  		{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw-loader!postcss-loader'
	  		},
			{
				test: /\.scss$/,
				exclude: helpers.root('src', 'app'),
				loader: 'null-loader'
			},
			{ 
				test: /\.scss$/,
				include: helpers.root('src', 'app'),
				loaders: ['exports-loader?module.exports.toString()', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},

	plugins: [
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			helpers.root('./src'), // location of your src
			{} // a map of your routes
		)
	]
}
