import type webpack from 'webpack'
import type { RuleSetRule } from 'webpack'
import type { IBuildPaths } from '../build/types/config'
import path from 'path'
import { buildScssLoader } from '../build/loaders/buildScssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: IBuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', 'tsx')

  // @ts-expect-error (everything is clear)
  config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if ((rule.test as string).includes('svg')) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  const scssLoader = buildScssLoader(true)
  config.module?.rules?.push(scssLoader)

  return config
}
