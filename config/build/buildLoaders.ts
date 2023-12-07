import type webpack from 'webpack'
import type { IBuildOptions } from './types/config'
import { buildScssLoader } from './loaders/buildScssLoader'

export const buildLoaders = ({ isDev }: IBuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)?$/,
    use: 'babel-loader',
    exclude: '/node_modules/'
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/'
  }

  const scssLoader = buildScssLoader(isDev)

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    scssLoader
  ]
}
