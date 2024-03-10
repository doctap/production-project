import type webpack from 'webpack'
import type { IBuildOptions } from './types/config'

export const buildResolvers = ({ paths }: IBuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {},
})
