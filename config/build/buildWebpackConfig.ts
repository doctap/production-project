import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    resolve: buildResolvers(),
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(paths),
  }
}