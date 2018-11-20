const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	devServer: {
	    contentBase: path.join(__dirname, 'dist'),
	    compress: true,
	     port:8080
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebPackPlugin({
			template: 'src/index.html'
		})
	]
};