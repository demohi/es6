/**
 * es6 - webpack.config.js
 * @mdemo
 */

'use strict';

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }
};
