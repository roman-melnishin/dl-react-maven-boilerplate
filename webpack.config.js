var path = require('path');

module.exports = {
    devtool: 'source-map',
	entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'target', 'test'),
        filename: 'bundle.js',
		publicPath: '/target/test/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }
};
