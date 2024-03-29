const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");
// const { FederatedTypesPlugin } = require("@module-federation/typescript");

const deps = require("./package.json").dependencies;

const federationConfig = {
    name: "main_app",
    filename: "remoteEntry.js",
    remotes: {
        component_app: "component_app@http://localhost:3001/remoteEntry.js",
    },
    exposes: {},
    shared: {
        ...deps,
        react: {
            singleton: true,
            requiredVersion: deps.react,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
    },
};

module.exports = (_, argv) => ({
    output: {
        publicPath: "http://localhost:3000/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin(federationConfig),
        // new FederatedTypesPlugin({ federationConfig }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
        new Dotenv(),
    ],
});
