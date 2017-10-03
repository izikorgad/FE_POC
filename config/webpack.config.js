const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname, "..");
const BUILD_DIR = path.resolve(ROOT_PATH, 'dist');
const CONFIG_DIR = path.resolve(ROOT_PATH, 'config');
const APP_DIR = path.resolve(ROOT_PATH, 'src');

const config = (env) => {


    return {
        devtool: 'source-map',
        devServer: {
            hot: true,
            open: true,
            port: 3000,
            historyApiFallback: true
        },
        entry: [path.resolve(APP_DIR, 'index.js')],
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js'
        },
        plugins: [

            new webpack.HotModuleReplacementPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: APP_DIR,
                    loader: 'babel-loader',
                    options: { extends: path.resolve(ROOT_PATH, 'config', '.babelrc') },
                    exclude: path.resolve(ROOT_PATH, 'node_modules')
                }
            ]
        },
        resolveLoader: {
            moduleExtensions: ["-loader"]
        },
        resolve: {
            modules: [path.resolve(APP_DIR), "node_modules"],
            extensions: ['.js', '.jsx']
        }
    };
}

module.exports = config;