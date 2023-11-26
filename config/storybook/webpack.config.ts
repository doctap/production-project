import webpack, { RuleSetRule } from 'webpack'
import { IBuildPaths } from '../build/types/config'
import path from 'path'
import { buildScssLoader } from '../build/loaders/buildScssLoader'

export default ({ config }: { config: webpack.Configuration}) => {
  const paths: IBuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', 'tsx')

  // @ts-ignore
  config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i}
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
