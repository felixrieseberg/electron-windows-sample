var path = require('path');

module.exports = {
    cache: true,
    entry: './src/index.jsx',
    output: {
        filename: 'browser-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx/,
            loader: 'jsx-loader'
        }]
    },
    externals: {
        'react': 'React',
        'react/addons': 'React'
    }
};