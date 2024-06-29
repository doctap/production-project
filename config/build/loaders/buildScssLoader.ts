import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildScssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (pathName: string) => pathName.includes('.module.'),
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
    ],
})
