import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: IBuildOptions): webpack.RuleSetRule[] => {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'babel-loader',
    exclude: '/node_modules/'
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (pathName: string) => pathName.includes('.module.'),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      'sass-loader',
    ],
  }

  return [
    svgLoader,
    fileLoader,
    typescriptLoader,
    scssLoader,
  ];
}