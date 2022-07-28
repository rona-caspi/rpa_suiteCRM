const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cleanOptions = {
    root: __dirname,
    verbose: true,
    dry: false,
    exclude: [],
};

module.exports = [
    {
        entry: [
            "./node_modules/@jacada-jbot/web/include/Utils/JQueryExtensions.js",
            "core-js/stable/promise",
            "./out/CoverageHandlers/SuiteCRMCoverageHandlerCreator.js",
        ],
        output: {
            library: "SuiteCRM",
            libraryTarget: "umd",
            filename: "coverage.js",
            globalObject: "this",
            path: `${__dirname}/dist`,
        },
        node: {
            net: "empty",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        plugins: [
            new CleanWebpackPlugin(cleanOptions),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                "window.$": "jquery",
            }),
        ],
    },
];
