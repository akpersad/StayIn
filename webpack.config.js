const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const devMode = process.env.NODE_ENV !== "production";
const SRC_DIR = __dirname + "/src";
const DIST_DIR = __dirname + "/dist";

module.exports = {
	entry: [SRC_DIR + "/index.jsx"],
	output: {
		path: DIST_DIR,
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.(scss|sass|css)$/,
				exclude: /node_modules/,
				loaders: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							importLoaders: 1
						}
					},
					"sass-loader"
				]
			},
			{
				test: /\.(html)$/,
				exclude: /node_modules/,
				use: {
					loader: "html-loader",
					options: { minimize: true }
				}
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: "file-loader"
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: SRC_DIR + "/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? "[name].css" : "[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
		}),
		new Dotenv()
	],
	devServer: {
		historyApiFallback: true,
		contentBase: DIST_DIR,
		port: 9000
	}
};
