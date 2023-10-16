import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { IBuildOptions, IBuildPaths } from './types/config';

export const buildPlugins = ({ html }: IBuildPaths): webpack.WebpackPluginInstance[] => {

  return [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new webpack.ProgressPlugin(),
  ];
};