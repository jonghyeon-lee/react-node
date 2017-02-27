module.exports = {
	entry: './app/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				excludes: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015','react']
				}
			}
		]
	}
};