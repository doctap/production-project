import { IBuildOptions } from './types/config';
import { Configuration as DevServerConfig } from 'webpack-dev-server';

export const buildDevServer = (options: IBuildOptions): DevServerConfig => {
  return {
    open: true,
    port: options.port,
  };
};