const path = require('path');

module.exports = {
    entry: {
        mobilemenu: './src/mobilemenu.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'mobilemenu',
            type: 'umd',
            export: 'default',
        },
        globalObject: 'this',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/i,
                use: 'svg-inline-loader',
            },
        ],
    },
}