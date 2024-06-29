import webpack from 'webpack'
import type { RuleSetRule } from 'webpack'
import path from 'path'
import type { IBuildPaths } from '../build/types/config'
import { buildScssLoader } from '../build/loaders/buildScssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', 'tsx')

    // @ts-expect-error (everything is clear)
    // eslint-disable-next-line no-param-reassign
    config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
        if (String(rule.test).includes('svg')) {
            return { ...rule, exclude: /\.svg$/i }
        }

        return rule
    })

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    const scssLoader = buildScssLoader(true)
    config.module?.rules?.push(scssLoader)

    config.plugins?.push(new webpack.DefinePlugin({
        _IS_DEV_: JSON.stringify(true),
    }))

    return config
}
