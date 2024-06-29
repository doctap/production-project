import { type Configuration as DevServerConfig } from 'webpack-dev-server'
import { type IBuildOptions } from './types/config'

export const buildDevServer = ({ port }: IBuildOptions): DevServerConfig => ({
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
})
