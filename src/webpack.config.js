var Path = require('path');
var Webpack = require('webpack');

module.exports = ({
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: [/\.(spec|e2e)\.ts$/], loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.html$/, loader: "html" },
            { test: /\.css/, loader: "style!css" },
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }]
    },
    entry: {
        main: ['./Client/main.ts']
    },
    output: {
        path: Path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    profile: true,
    plugins: [
        new Webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(process.env.ASPNETCORE_ENVIRONMENT)
            }
        })
    ]
});
