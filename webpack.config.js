const path = require('path');
const packagejson = require('./package.json');
const webpack = require('webpack');

const BABEL_CONFIG = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/proposal-class-properties', "@babel/proposal-object-rest-spread", "styled-jsx/babel"]
  };
  

const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = (env, argv) => {

    let mode;

    const overrides = module.exports || {};

    // if user specified mode flag take that value
    if (argv && argv.mode) {
        mode = argv.mode;
    }

    // else if configuration object is already set (module.exports) use that value
    else if (overrides.mode) {
        mode = overrides.mode;
    }

    // else take webpack default (production)
    else {
        mode = 'production';
    }

    let filename = (overrides.output || {}).filename;
    if(!filename) {
        const modeSuffix = mode === 'development' ? 'dev' : 'min';
        filename = `${dashLibraryName}.${modeSuffix}.js`;
    }

    const entry = overrides.entry || {main: './src/lib/index.js'};

    const devtool = overrides.devtool || 'source-map';

    const externals = ('externals' in overrides) ? overrides.externals : ({
        react: 'React',
        'react-dom': 'ReactDOM',
        'plotly.js': 'Plotly',
        'prop-types': 'PropTypes',
    });

    return {
        mode,
        entry,
        output: {
            path: path.resolve(__dirname, dashLibraryName),
            filename,
            library: dashLibraryName,
            libraryTarget: 'window',
        },
        devtool,
        externals,
        plugins: [
            new webpack.EnvironmentPlugin(['MapboxAccessToken']),
            // new webpack.DefinePlugin({__IS_STREAMING__: JSON.stringify(Boolean(env.stream))}),
            // new webpack.DefinePlugin({__IS_LIVE__: JSON.stringify(Boolean(env.live))})
        ],
        module: {
            noParse: /(mapbox-gl)\.js$/,
            rules: [
                {
                    // Compile ES2015 using bable
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: BABEL_CONFIG
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                insertAt: 'top'
                            }
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
            ],
        },
    }
};
