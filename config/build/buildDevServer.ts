import { IBuildOptions } from './types/config';
import { Configuration as DevServerConfig } from 'webpack-dev-server';

export const buildDevServer = ({ port }: IBuildOptions): DevServerConfig => {
  return {
    open: true,
    port: port,
    historyApiFallback: true,
  };
};