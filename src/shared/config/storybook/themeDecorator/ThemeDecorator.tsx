import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (
    (story: () => StoryFnReactReturnType) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                {story()}
            </div>
        </ThemeProvider>
    )
)
