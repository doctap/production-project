import { type IBuildOptions } from './types/config'
import { type Configuration as DevServerConfig } from 'webpack-dev-server'

export const buildDevServer = ({ port }: IBuildOptions): DevServerConfig => {
  return {
    open: true,
    port,
    historyApiFallback: true,
    hot: true
  }
}
