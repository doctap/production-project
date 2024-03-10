import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { type WebpackPluginInstance } from 'webpack'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { IBuildOptions } from './types/config'

export const buildPlugins = ({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    _IS_DEV_: JSON.stringify(isDev),
  }),
  new webpack.HotModuleReplacementPlugin(),
    // clear it in filter
    (isDev && new ReactRefreshPlugin()) as WebpackPluginInstance,
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
]
  .filter(Boolean)
